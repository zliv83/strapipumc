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
    SubTitle: Attribute.String;
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
    description: '';
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
    description: '';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface SharedBulletinBoardContent extends Schema.Component {
  collectionName: 'components_shared_bulletin_board_contents';
  info: {
    displayName: 'BulletinBoardContent';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
  };
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
    description: '';
  };
  attributes: {
    key: Attribute.String;
    cells: Attribute.Component<'shared.rows', true>;
  };
}

export interface SharedFaqLink extends Schema.Component {
  collectionName: 'components_shared_faq_links';
  info: {
    displayName: 'FAQLink';
    description: '';
  };
  attributes: {
    Question: Attribute.String;
    FAQLink: Attribute.Blocks;
  };
}

export interface SharedFaqQuestionsAnswers extends Schema.Component {
  collectionName: 'components_shared_faq_questions_answers';
  info: {
    displayName: 'FaqQuestionsAnswers';
    description: '';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.Blocks;
    image: Attribute.Media;
    alt: Attribute.String;
    RemindText: Attribute.String;
    my_table: Attribute.Relation<
      'shared.faq-questions-answers',
      'oneToOne',
      'api::my-table.my-table'
    >;
    ImageLink: Attribute.String;
  };
}

export interface SharedFaqRichText extends Schema.Component {
  collectionName: 'components_shared_faq_rich_texts';
  info: {
    displayName: 'FAQRichText';
    description: '';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.Blocks;
    AnswerImage: Attribute.Media;
  };
}

export interface SharedFaqRowsNew extends Schema.Component {
  collectionName: 'components_shared_faq_rows_news';
  info: {
    displayName: 'FAQRowsNew';
  };
  attributes: {
    Label: Attribute.String;
    cells: Attribute.Component<'shared.rows', true>;
  };
}

export interface SharedFaqRows extends Schema.Component {
  collectionName: 'components_shared_faq_rows';
  info: {
    displayName: 'FAQRows';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    cells: Attribute.Component<'shared.rows', true>;
  };
}

export interface SharedFaqTable extends Schema.Component {
  collectionName: 'components_shared_faq_tables';
  info: {
    displayName: 'FAQTable';
  };
  attributes: {
    FAQColumns: Attribute.Component<'shared.columns', true>;
  };
}

export interface SharedFaqs extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQS';
    description: '';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.String;
    FAQListItems: Attribute.Component<'shared.list-items', true>;
    FAQImage: Attribute.Media;
    text: Attribute.String;
    FaqTable: Attribute.Component<'shared.faq-table'>;
  };
}

export interface SharedFeeRows extends Schema.Component {
  collectionName: 'components_shared_fee_rows';
  info: {
    displayName: 'FeeRows';
  };
  attributes: {
    key: Attribute.String;
    cells: Attribute.Component<'shared.rows', true>;
  };
}

export interface SharedFormsAndHandbookCard extends Schema.Component {
  collectionName: 'components_shared_forms_and_handbook_cards';
  info: {
    displayName: 'FormsAndHandbookCard';
    description: '';
  };
  attributes: {
    form: Attribute.String;
    description: Attribute.String;
    href: Attribute.String;
    FormPDF: Attribute.Media;
  };
}

export interface SharedFormsInfoArray extends Schema.Component {
  collectionName: 'components_shared_forms_info_arrays';
  info: {
    displayName: 'FormsInfoArray';
  };
  attributes: {
    Title: Attribute.String;
    Text: Attribute.Blocks;
  };
}

export interface SharedFormsInformation extends Schema.Component {
  collectionName: 'components_shared_forms_informations';
  info: {
    displayName: 'forms_information';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.Blocks;
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

export interface SharedMasonaryPhotos extends Schema.Component {
  collectionName: 'components_shared_masonary_photos';
  info: {
    displayName: 'MasonaryPhotos';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Pictures: Attribute.Media;
    description: Attribute.Text;
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

export interface SharedMyMeta extends Schema.Component {
  collectionName: 'components_shared_my_metas';
  info: {
    displayName: 'MyMeta';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.Text;
    keywords: Attribute.Text;
  };
}

export interface SharedMyTableRows extends Schema.Component {
  collectionName: 'components_shared_my_table_rows';
  info: {
    displayName: 'MyTableRows';
    icon: 'arrowRight';
  };
  attributes: {
    key: Attribute.String;
    cells: Attribute.Component<'shared.rows', true>;
  };
}

export interface SharedNewRegCard extends Schema.Component {
  collectionName: 'components_shared_new_reg_cards';
  info: {
    displayName: 'NewRegCard';
    description: '';
  };
  attributes: {
    ClassName: Attribute.String;
    Schedule: Attribute.String;
    ClassFull: Attribute.Boolean;
    ClassCancelled: Attribute.Boolean;
    href: Attribute.String;
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

export interface SharedQuestionAnswerImage extends Schema.Component {
  collectionName: 'components_shared_question_answer_images';
  info: {
    displayName: 'QuestionAnswerImage';
  };
  attributes: {
    Question: Attribute.String;
    FAQListItems: Attribute.Component<'shared.list-items', true>;
    AnswerImage: Attribute.Media;
  };
}

export interface SharedQuestionAnswer extends Schema.Component {
  collectionName: 'components_shared_question_answers';
  info: {
    displayName: 'QuestionAnswer';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.String;
  };
}

export interface SharedQuestionsAndAnswers extends Schema.Component {
  collectionName: 'components_shared_questions_and_answers';
  info: {
    displayName: 'QuestionsAndAnswers';
  };
  attributes: {
    Question: Attribute.String;
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
    description: '';
  };
  attributes: {
    ClassName: Attribute.String;
    ClassImage: Attribute.Media;
    Schedule: Attribute.String;
    open: Attribute.Boolean;
    Cancelled: Attribute.Boolean;
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
    displayName: 'cell';
    description: '';
  };
  attributes: {
    data: Attribute.String;
    label: Attribute.String;
  };
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

export interface SharedSummerCampInfo extends Schema.Component {
  collectionName: 'components_shared_summer_camp_infos';
  info: {
    displayName: 'SummerCampInfo';
  };
  attributes: {
    Title: Attribute.String;
    Text: Attribute.Blocks;
  };
}

export interface SharedTableMediaFaq extends Schema.Component {
  collectionName: 'components_shared_table_media_faqs';
  info: {
    displayName: 'TableMediaFAQ';
  };
  attributes: {
    columns: Attribute.Component<'shared.columns', true>;
    rows: Attribute.Component<'shared.faq-rows', true>;
    Question: Attribute.String;
    Answer: Attribute.String;
    REMINDText: Attribute.String;
    Icon: Attribute.Media;
  };
}

export interface SharedTableMedia extends Schema.Component {
  collectionName: 'components_shared_table_medias';
  info: {
    displayName: 'TableMedia';
    description: '';
  };
  attributes: {
    FAQColumns: Attribute.Component<'shared.columns', true>;
    Question: Attribute.String;
    Icon: Attribute.Media;
    RemindText: Attribute.String;
    Rows: Attribute.Component<'shared.faq-rows-new', true>;
  };
}

export interface SharedTableRow extends Schema.Component {
  collectionName: 'components_shared_table_rows';
  info: {
    displayName: 'TableRow';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    cells: Attribute.Component<'shared.rows', true>;
    label: Attribute.String;
  };
}

export interface SharedTable extends Schema.Component {
  collectionName: 'components_shared_tables';
  info: {
    displayName: 'table';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    columns: Attribute.Component<'shared.columns', true>;
    rows: Attribute.Component<'shared.my-table-rows', true>;
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
      'shared.bulletin-board-content': SharedBulletinBoardContent;
      'shared.class-programming': SharedClassProgramming;
      'shared.columns': SharedColumns;
      'shared.dynamic-rows': SharedDynamicRows;
      'shared.faq-link': SharedFaqLink;
      'shared.faq-questions-answers': SharedFaqQuestionsAnswers;
      'shared.faq-rich-text': SharedFaqRichText;
      'shared.faq-rows-new': SharedFaqRowsNew;
      'shared.faq-rows': SharedFaqRows;
      'shared.faq-table': SharedFaqTable;
      'shared.faqs': SharedFaqs;
      'shared.fee-rows': SharedFeeRows;
      'shared.forms-and-handbook-card': SharedFormsAndHandbookCard;
      'shared.forms-info-array': SharedFormsInfoArray;
      'shared.forms-information': SharedFormsInformation;
      'shared.list-items': SharedListItems;
      'shared.list': SharedList;
      'shared.masonary-photos': SharedMasonaryPhotos;
      'shared.media': SharedMedia;
      'shared.my-meta': SharedMyMeta;
      'shared.my-table-rows': SharedMyTableRows;
      'shared.new-reg-card': SharedNewRegCard;
      'shared.options-list': SharedOptionsList;
      'shared.options': SharedOptions;
      'shared.program-card-list': SharedProgramCardList;
      'shared.program-card': SharedProgramCard;
      'shared.program-options': SharedProgramOptions;
      'shared.program-quick-info': SharedProgramQuickInfo;
      'shared.programs-intro': SharedProgramsIntro;
      'shared.question-answer-image': SharedQuestionAnswerImage;
      'shared.question-answer': SharedQuestionAnswer;
      'shared.questions-and-answers': SharedQuestionsAndAnswers;
      'shared.quote': SharedQuote;
      'shared.registration-card': SharedRegistrationCard;
      'shared.rich-text': SharedRichText;
      'shared.rows': SharedRows;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.staff': SharedStaff;
      'shared.summer-camp-info': SharedSummerCampInfo;
      'shared.table-media-faq': SharedTableMediaFaq;
      'shared.table-media': SharedTableMedia;
      'shared.table-row': SharedTableRow;
      'shared.table': SharedTable;
      'shared.teacher-student-rows': SharedTeacherStudentRows;
      'shared.testimonial': SharedTestimonial;
      'shared.two-feilds': SharedTwoFeilds;
      'shared.video-embed': SharedVideoEmbed;
    }
  }
}
