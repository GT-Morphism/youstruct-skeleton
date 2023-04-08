interface accordionContentItem {
	iconName: string;
	summary: string;
	content: string;
}

interface homepageStepperContentItem {
	header: string;
	content: string;
}

interface testimonialContentItem {
	testimonialName: string;
	testimonialInitials: string;
	testimonialAge: number;
	testimonialPosition: string;
	testimonialOpinionSummary: string;
	testimonialOpinionContent: string;
}

interface overviewContentItem {
	iconName: string;
	buttonDescription: string;
	popupContent: string;
}

interface faqContentItem {
	question: string;
	answer: string;
	hasAnchorTag?: boolean;
	anchorTagDescription?: string;
	anchorTagURL?: string;
	anchorTagStyle?: "primary" | "success" | "error";
}
