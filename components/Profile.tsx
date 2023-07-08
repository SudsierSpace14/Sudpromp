import { Post } from "@app/types"
import { PromptCard } from "./PromptCard";
import React from "react";

interface Props {
    name: string
    desc: string
    data: Post[]
    handleEdit: (p: Post) => void;
    handleDelete: (p: Post) => void;
}

export const Profile: React.FC<Props> = ({ data, desc, handleDelete, handleEdit, name }) => {
    const handleTagClick = (e: string) => {

    }

    return (
        <section className='w-full'>
            <h1 className='head_text text-left'>
                <span>{name} Profile</span>
            </h1>
            <p className='desc text-left'>{desc}</p>

            <div className='mt-10 prompt_layout'>
                {data.map((post) => (
                    <PromptCard
                        key={post._id}
                        post={post}
                        handleTagClick={handleTagClick}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                    />
                ))}
            </div>

        </section>
    )
}
