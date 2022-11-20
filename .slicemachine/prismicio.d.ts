// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for posts documents */
interface BlogDocumentData {
    /**
     * title field in *posts*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * subtitle field in *posts*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * author field in *posts*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.author
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    author: prismicT.KeyTextField;
    /**
     * banner field in *posts*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * content field in *posts*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.content[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    content: prismicT.GroupField<Simplify<BlogDocumentDataContentItem>>;
    /**
     * Slice Zone field in *posts*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<BlogDocumentDataSlicesSlice>;
}
/**
 * Item in posts → content
 *
 */
export interface BlogDocumentDataContentItem {
    /**
     * heading field in *posts → content*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.content[].heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * body field in *posts → content*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.content[].body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Slice for *posts → Slice Zone*
 *
 */
type BlogDocumentDataSlicesSlice = never;
/**
 * posts document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;
export type AllDocumentTypes = BlogDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { BlogDocumentData, BlogDocumentDataContentItem, BlogDocumentDataSlicesSlice, BlogDocument, AllDocumentTypes };
    }
}
