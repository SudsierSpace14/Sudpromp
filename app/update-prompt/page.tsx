"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Form } from "@components/Form";
import { updatePrompt } from "./update";

const UpdatePrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const promptId = searchParams.get("id") as string;

    const [post, setPost] = useState({ prompt: "", tag: "", });
    const [submitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`);
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag,
            });
        };

        if (promptId) getPromptDetails();
    }, [promptId]);

    return (
        <Form
            type='Edit'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={
                (event: Event) => updatePrompt({ event, post, promptId, router, setIsSubmitting })
            }
        />
    );
}

export default UpdatePrompt