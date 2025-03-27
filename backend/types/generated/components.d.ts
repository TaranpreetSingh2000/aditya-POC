import type { Schema, Struct } from '@strapi/strapi';

export interface CardCard extends Struct.ComponentSchema {
  collectionName: 'components_card_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    cardDescription: Schema.Attribute.Blocks;
    cardIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    cardTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeadingHeading extends Struct.ComponentSchema {
  collectionName: 'components_heading_headings';
  info: {
    description: '';
    displayName: 'Heading';
  };
  attributes: {
    headingboldtype: Schema.Attribute.JSON;
  };
}

export interface PageHeadingPageHeading extends Struct.ComponentSchema {
  collectionName: 'components_page_heading_page_headings';
  info: {
    displayName: 'Page-Heading';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['Black', 'Red']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Black'>;
    hasBreakRow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.card': CardCard;
      'heading.heading': HeadingHeading;
      'page-heading.page-heading': PageHeadingPageHeading;
    }
  }
}
