"use client";

import { useState, useEffect, ChangeEventHandler, ChangeEvent } from "react";

import { PromptCardList } from "./PromptCardList";

import type { Post } from '@app/types'

export const Feed = () => {
    const [allPosts, setAllPosts] = useState<Post[]>([]);

    // Search states
    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState<any>(null);
    const [searchedResults, setSearchedResults] = useState<Post[]>([]);

    const fetchPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();

        setAllPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const filterPrompts = (searchtext: string) => {
        const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
        return allPosts.filter(
            (item) =>
                regex.test(item.creator.username) ||
                regex.test(item.tag) ||
                regex.test(item.prompt)
        );
    };

    const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        // debounce method
        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterPrompts(e.target.value);
                setSearchedResults(searchResult);
            }, 500)
        );
    }

    const handleTagClick = (tagName: string) => {
        setSearchText(tagName);

        const searchResult = filterPrompts(tagName);
        setSearchedResults(searchResult);
    };

    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='Search for a tag or a username'
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className='search_input peer'
                />
            </form>

            {/* All Prompts */}
            {searchText ? (
                <PromptCardList
                    data={searchedResults}
                    handleTagClick={handleTagClick}
                />
            ) : (
                <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
            )}
        </section>
    )
}
