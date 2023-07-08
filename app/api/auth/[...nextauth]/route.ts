import { connectToDB } from '@utils/database'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { User } from '@models/user'



const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async session(credentials) {
            const { session } = credentials as any
            const sessionUser = await User.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString()

            return session
        },
        async signIn(credentials) {
            const { profile } = credentials as any;

            try {
                await connectToDB()

                // check if user already exists
                const userExists = await User.findOne({ email: profile.email });

                // if not, create a new document and save user in MongoDB
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture,
                    });
                }

                return true
            } catch (err: any) {
                console.log("Error checking if user exists: ", err.message);
                return false
            }
        },
    }
})

export { handler as GET, handler as POST }