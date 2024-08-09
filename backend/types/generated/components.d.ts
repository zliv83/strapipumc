import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsFeatureColumn extends Schema.Component {
  collectionName: 'components_slices_feature_columns';
  info: {
    name: 'FeatureColumn';
    displayName: 'Feature column';
    icon: 'align-center';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface ElementsFeatureRow extends Schema.Component {
  collectionName: 'components_slices_feature_rows';
  info: {
    name: 'FeatureRow';
    displayName: 'Feature row';
    icon: 'arrows-alt-h';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    media: Attribute.Media & Attribute.Required;
    link: Attribute.Component<'links.link'>;
  };
}

export interface ElementsFeature extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    media: Attribute.Media;
    showLink: Attribute.Boolean & Attribute.DefaultTo<false>;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    url: Attribute.String;
    text: Attribute.String;
  };
}

export interface ElementsFooterSection extends Schema.Component {
  collectionName: 'components_links_footer_sections';
  info: {
    name: 'FooterSection';
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'links.link', true>;
  };
}

export interface ElementsHeroSection extends Schema.Component {
  collectionName: 'components_elements_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: '';
  };
  attributes: {
    Header: Attribute.String;
    Subtext: Attribute.String;
  };
}

export interface ElementsLogos extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    name: 'logos';
    displayName: 'Logos';
    icon: 'apple-alt';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: 'components_elements_notification_banners';
  info: {
    name: 'NotificationBanner';
    displayName: 'Notification banner';
    icon: 'exclamation';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['alert', 'info', 'warning']> &
      Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    show: Attribute.Boolean & Attribute.DefaultTo<false>;
    link: Attribute.Component<'links.link'>;
  };
}

export interface ElementsPlan extends Schema.Component {
  collectionName: 'components_elements_plans';
  info: {
    name: 'plan';
    displayName: 'Pricing plan';
    icon: 'search-dollar';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    isRecommended: Attribute.Boolean;
    price: Attribute.Decimal;
    pricePeriod: Attribute.String;
  };
}

export interface ElementsTestimonial extends Schema.Component {
  collectionName: 'components_slices_testimonials';
  info: {
    name: 'Testimonial';
    displayName: 'Testimonial';
    icon: 'user-check';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
    authorName: Attribute.String & Attribute.Required;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    footerLogo: Attribute.Component<'layout.logo'>;
    menuLinks: Attribute.Component<'links.link', true>;
    legalLinks: Attribute.Component<'links.link', true>;
    socialLinks: Attribute.Component<'links.social-link', true>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    logoImg: Attribute.Media & Attribute.Required;
    logoText: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    name: 'Navbar';
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    button: Attribute.Component<'links.button-link'>;
    navbarLogo: Attribute.Component<'layout.logo'>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    name: 'Button-link';
    displayName: 'Button link';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    name: 'Button';
    displayName: 'Button';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    name: 'Link';
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    social: Attribute.Enumeration<['YOUTUBE', 'TWITTER', 'DISCORD', 'WEBSITE']>;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    name: 'Metadata';
    displayName: 'Metadata';
    icon: 'robot';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
  };
}

export interface SectionsBottomActions extends Schema.Component {
  collectionName: 'components_slices_bottom_actions';
  info: {
    name: 'BottomActions';
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    buttons: Attribute.Component<'links.button-link', true>;
    description: Attribute.Text;
  };
}

export interface SectionsFeatureColumnsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_columns_groups';
  info: {
    name: 'FeatureColumnsGroup';
    displayName: 'Feature columns group';
    icon: 'star-of-life';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsFeatureRowsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    name: 'FeatureRowsGroup';
    displayName: 'Feaures row group';
    icon: 'bars';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsFeatures extends Schema.Component {
  collectionName: 'components_layout_features';
  info: {
    displayName: 'Features';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    feature: Attribute.Component<'elements.feature', true>;
  };
}

export interface SectionsHeading extends Schema.Component {
  collectionName: 'components_sections_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    description: Attribute.String;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    name: 'Hero';
    displayName: 'Hero';
    icon: 'heading';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    picture: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsLargeVideo extends Schema.Component {
  collectionName: 'components_slices_large_videos';
  info: {
    name: 'LargeVideo';
    displayName: 'Large video';
    icon: 'play-circle';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    video: Attribute.Media & Attribute.Required;
    poster: Attribute.Media;
  };
}

export interface SectionsLeadForm extends Schema.Component {
  collectionName: 'components_sections_lead_forms';
  info: {
    name: 'Lead form';
    displayName: 'Lead form';
    icon: 'at';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    emailPlaceholder: Attribute.String;
    submitButton: Attribute.Component<'links.button'>;
    location: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SectionsPricing extends Schema.Component {
  collectionName: 'components_sections_pricings';
  info: {
    name: 'Pricing';
    displayName: 'Pricing';
    icon: 'dollar-sign';
  };
  attributes: {
    title: Attribute.String;
    plans: Attribute.Component<'elements.plan', true>;
  };
}

export interface SectionsRichText extends Schema.Component {
  collectionName: 'components_sections_rich_texts';
  info: {
    name: 'RichText';
    displayName: 'Rich text';
    icon: 'text-height';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SectionsTestimonialsGroup extends Schema.Component {
  collectionName: 'components_slices_testimonials_groups';
  info: {
    name: 'TestimonialsGroup';
    displayName: 'Testimonials group';
    icon: 'user-friends';
    description: '';
  };
  attributes: {
    quote: Attribute.String;
    author: Attribute.String;
  };
}

export interface SharedAge extends Schema.Component {
  collectionName: 'components_shared_ages';
  info: {
    displayName: 'age';
  };
  attributes: {};
}

export interface SharedClassProgramming extends Schema.Component {
  collectionName: 'components_shared_class_programmings';
  info: {
    displayName: 'classProgramming';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface SharedColumns extends Schema.Component {
  collectionName: 'components_shared_columns';
  info: {
    displayName: 'columns';
  };
  attributes: {
    key: Attribute.String;
    label: Attribute.String;
  };
}

export interface SharedDynamicRows extends Schema.Component {
  collectionName: 'components_shared_dynamic_rows';
  info: {
    displayName: 'dynamicRows';
  };
  attributes: {
    key: Attribute.String;
  };
}

export interface SharedListItems extends Schema.Component {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'ListItems';
  };
  attributes: {
    listItem: Attribute.String;
  };
}

export interface SharedList extends Schema.Component {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    ListName: Attribute.String;
    listItems: Attribute.Component<'shared.list-items', true>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
    description: '';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedOptionsList extends Schema.Component {
  collectionName: 'components_shared_options_lists';
  info: {
    displayName: 'OptionsList';
  };
  attributes: {
    Name: Attribute.String;
  };
}

export interface SharedOptions extends Schema.Component {
  collectionName: 'components_shared_options';
  info: {
    displayName: 'options';
  };
  attributes: {
    AgeGroup: Attribute.String;
    Schedule: Attribute.String;
  };
}

export interface SharedProgramCardList extends Schema.Component {
  collectionName: 'components_shared_program_card_lists';
  info: {
    displayName: 'ProgramCardList';
  };
  attributes: {
    ProgramListItem: Attribute.String;
  };
}

export interface SharedProgramCard extends Schema.Component {
  collectionName: 'components_shared_program_cards';
  info: {
    displayName: 'ProgramCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    classpicture: Attribute.Media;
    description: Attribute.Component<'shared.program-card-list', true>;
    alt: Attribute.String;
    href: Attribute.String;
  };
}

export interface SharedProgramInstance extends Schema.Component {
  collectionName: 'components_shared_program_instances';
  info: {
    displayName: 'Program Instance';
    description: '';
  };
  attributes: {
    programs: Attribute.Relation<
      'shared.program-instance',
      'oneToMany',
      'api::program.program'
    >;
    Schedule: Attribute.String;
    open: Attribute.Boolean;
    href: Attribute.String;
  };
}

export interface SharedProgramOptions extends Schema.Component {
  collectionName: 'components_shared_program_options';
  info: {
    displayName: 'ProgramOptions';
  };
  attributes: {
    AgeGroup: Attribute.String;
    WeeklySchedule: Attribute.String;
  };
}

export interface SharedProgramQuickInfo extends Schema.Component {
  collectionName: 'components_shared_program_quick_infos';
  info: {
    displayName: 'programQuickInfo';
    description: '';
  };
  attributes: {
    age: Attribute.Component<'shared.two-feilds'>;
    optionsListTitle: Attribute.String;
    optionsLIst: Attribute.Component<'shared.list-items', true>;
    Ratio: Attribute.Component<'shared.two-feilds'>;
  };
}

export interface SharedProgramsIntro extends Schema.Component {
  collectionName: 'components_shared_programs_intros';
  info: {
    displayName: 'ProgramsIntro';
    description: '';
  };
  attributes: {
    Header: Attribute.String;
    Details: Attribute.Blocks;
    SubDetails: Attribute.Blocks;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text & Attribute.Required;
    author: Attribute.String;
  };
}

export interface SharedRegistrationCard extends Schema.Component {
  collectionName: 'components_shared_registration_cards';
  info: {
    displayName: 'RegistrationCard';
  };
  attributes: {
    ClassName: Attribute.String;
    ClassImage: Attribute.Media;
    Schedule: Attribute.String;
    open: Attribute.Boolean;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedRows extends Schema.Component {
  collectionName: 'components_shared_rows';
  info: {
    displayName: 'rows';
  };
  attributes: {};
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedStaff extends Schema.Component {
  collectionName: 'components_shared_staff';
  info: {
    displayName: 'Staff';
    description: '';
  };
  attributes: {
    headshot: Attribute.Media;
    name: Attribute.String;
    bio: Attribute.Blocks;
    position: Attribute.String;
  };
}

export interface SharedTable extends Schema.Component {
  collectionName: 'components_shared_tables';
  info: {
    displayName: 'table';
  };
  attributes: {
    title: Attribute.String;
    columns: Attribute.Component<'shared.columns', true>;
    rows: Attribute.Component<'shared.rows', true>;
  };
}

export interface SharedTeacherStudentRows extends Schema.Component {
  collectionName: 'components_shared_teacher_student_rows';
  info: {
    displayName: 'TeacherStudentRows';
    description: '';
  };
  attributes: {
    age: Attribute.String;
    pumcTeacherStudentRatio: Attribute.String;
    stateTeacherStudentRatio: Attribute.String;
  };
}

export interface SharedTestimonial extends Schema.Component {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    author: Attribute.String;
    quote: Attribute.Blocks;
  };
}

export interface SharedTwoFeilds extends Schema.Component {
  collectionName: 'components_shared_two_feilds';
  info: {
    displayName: 'twoFeilds';
  };
  attributes: {
    label: Attribute.String;
    description: Attribute.String;
  };
}

export interface SharedVideoEmbed extends Schema.Component {
  collectionName: 'components_sections_video_embeds';
  info: {
    displayName: 'Video Embed';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.feature-column': ElementsFeatureColumn;
      'elements.feature-row': ElementsFeatureRow;
      'elements.feature': ElementsFeature;
      'elements.footer-section': ElementsFooterSection;
      'elements.hero-section': ElementsHeroSection;
      'elements.logos': ElementsLogos;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.plan': ElementsPlan;
      'elements.testimonial': ElementsTestimonial;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'layout.navbar': LayoutNavbar;
      'links.button-link': LinksButtonLink;
      'links.button': LinksButton;
      'links.link': LinksLink;
      'links.social-link': LinksSocialLink;
      'meta.metadata': MetaMetadata;
      'sections.bottom-actions': SectionsBottomActions;
      'sections.feature-columns-group': SectionsFeatureColumnsGroup;
      'sections.feature-rows-group': SectionsFeatureRowsGroup;
      'sections.features': SectionsFeatures;
      'sections.heading': SectionsHeading;
      'sections.hero': SectionsHero;
      'sections.large-video': SectionsLargeVideo;
      'sections.lead-form': SectionsLeadForm;
      'sections.pricing': SectionsPricing;
      'sections.rich-text': SectionsRichText;
      'sections.testimonials-group': SectionsTestimonialsGroup;
      'shared.age': SharedAge;
      'shared.class-programming': SharedClassProgramming;
      'shared.columns': SharedColumns;
      'shared.dynamic-rows': SharedDynamicRows;
      'shared.list-items': SharedListItems;
      'shared.list': SharedList;
      'shared.media': SharedMedia;
      'shared.options-list': SharedOptionsList;
      'shared.options': SharedOptions;
      'shared.program-card-list': SharedProgramCardList;
      'shared.program-card': SharedProgramCard;
      'shared.program-instance': SharedProgramInstance;
      'shared.program-options': SharedProgramOptions;
      'shared.program-quick-info': SharedProgramQuickInfo;
      'shared.programs-intro': SharedProgramsIntro;
      'shared.quote': SharedQuote;
      'shared.registration-card': SharedRegistrationCard;
      'shared.rich-text': SharedRichText;
      'shared.rows': SharedRows;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.staff': SharedStaff;
      'shared.table': SharedTable;
      'shared.teacher-student-rows': SharedTeacherStudentRows;
      'shared.testimonial': SharedTestimonial;
      'shared.two-feilds': SharedTwoFeilds;
      'shared.video-embed': SharedVideoEmbed;
    }
  }
}
