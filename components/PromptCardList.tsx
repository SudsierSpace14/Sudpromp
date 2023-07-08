"use client";

import { PromptCard } from "./PromptCard";
import { Post } from '@app/types'

interface PromptCardListProps {
    data: Array<Post>,
    handleTagClick: (e: string) => void;
}

export const PromptCardList: React.FC<PromptCardListProps> = ({ data, handleTagClick }) => {
    const Delete = () => {

    }

    const Edit = () => {

    }

    return (
        <div className='mt-16 prompt_layout'>
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                    handleDelete={Delete}
                    handleEdit={Edit}
                />
            ))}
        </div>
    );
};