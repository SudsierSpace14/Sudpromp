import { Post } from "@app/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

interface Props {
    setIsSubmitting: (e: boolean) => void;
    promptId: string;
    post: { prompt: string, tag: string }
    event: Event;
    router: AppRouterInstance
}

export const updatePrompt = async ({ event, setIsSubmitting, promptId, post, router }: Props) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!promptId) return alert("Missing PromptId!");

    try {
        const response = await fetch(`/api/prompt/${promptId}`, {
            method: "PATCH",
            body: JSON.stringify({
                prompt: post.prompt,
                tag: post.tag,
            }),
        });

        if (response.ok) {
            router.push("/");
        }
    } catch (error) {
        console.log(error);
    } finally {
        setIsSubmitting(false);
    }
};