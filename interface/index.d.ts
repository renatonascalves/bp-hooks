/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The docblock tags for the hook
 */
export type Tags = Tag[];
/**
 * The list of hooks
 */
export type Hooks = Hook[];

/**
 * The container for the list of hooks
 */
export interface HooksContainer {
  /**
   * The JSON schema to verify a hook document against
   */
  $schema: string;
  hooks: Hooks;
}
/**
 * The hook representation
 */
export interface Hook {
  /**
   * The hook name
   */
  name: string;
  /**
   * The relative name of the file containing the hook
   */
  file: string;
  /**
   * The hook type
   */
  type: string;
  doc: Doc;
  /**
   * The number of arguments passed to the hook
   */
  args: number;
}
/**
 * The docblock information for the hook
 */
export interface Doc {
  /**
   * The short description as plain text
   */
  description: string;
  /**
   * The long description as markdown
   */
  long_description: string;
  /**
   * The long description as HTML
   */
  long_description_html: string;
  tags: Tags;
}
/**
 * The docblock tags information for the hook
 */
export interface Tag {
  /**
   * The tag name
   */
  name: string;
  /**
   * The tag content
   */
  content: string;
  /**
   * Allowed types for parameter values, for @param tags
   */
  types?: string[];
  /**
   * The name of the parameter variable, for @param tags
   */
  variable?: string;
  /**
   * A link to more information, for @link tags
   */
  link?: string;
  /**
   * Related function to refer to, for @see tags
   */
  refers?: string;
  /**
   * This is only used for @since 3.0.0 MU tags
   */
  description?: string;
}