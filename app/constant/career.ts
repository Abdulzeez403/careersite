interface MoreInfo {
    EducationRequirements: string;
    Certifications: string[];
    ProfessionalAssociations: string[];
}

interface CareerData {
    About: string;
    Activity: string[];
    CareerRecruiter: string[];
    MoreInfo: MoreInfo;
}

// Define the type for the entire career data
interface CareerDataMap {
    [key: string]: CareerData;
}



export const careerData: CareerDataMap = {
    "Health": {
        "About": "The Health sector is dedicated to improving and maintaining people's well-being. Careers in this field span from medical professionals like doctors and nurses to health administrators and wellness coaches. It offers opportunities to make a tangible difference in people's lives through direct care, research, and public health initiatives.",
        "Activity": [
            "Clinical Practice: Diagnosing and treating patients.",
            "Research: Conducting studies to advance medical knowledge and treatments.",
            "Public Health: Developing policies and programs to improve community health.",
            "Administration: Managing healthcare facilities and services."
        ],
        "CareerRecruiter": [
            "Healthcare Providers: Hospitals, clinics, and private practices.",
            "Research Institutions: Universities and research organizations.",
            "Public Health Agencies: Government health departments and NGOs.",
            "Health Technology Companies: Firms developing medical devices and health IT solutions."
        ],
        "MoreInfo": {
            "EducationRequirements": "Varies from medical degrees to certifications and training.",
            "Certifications": ["Medical licenses, board certifications, and specialized training."],
            "ProfessionalAssociations": [
                "American Medical Association (AMA)",
                "Public Health Association (PHA)"
            ]
        }
    },
    "Politics": {
        "About": "A career in Politics involves shaping public policy and governance. Professionals in this field work to influence legislation, represent constituents, and manage public affairs. Roles include elected officials, policy advisors, campaign managers, and political analysts.",
        "Activity": [
            "Legislative Work: Drafting and voting on laws and policies.",
            "Campaign Management: Organizing and running political campaigns.",
            "Public Policy: Analyzing and developing policy recommendations.",
            "Advisory Roles: Providing strategic advice to politicians and government officials."
        ],
        "CareerRecruiter": [
            "Government Agencies: Local, state, and federal government offices.",
            "Political Campaigns: Campaign organizations and political parties.",
            "Think Tanks: Research organizations focusing on policy issues.",
            "Lobbying Firms: Companies advocating for specific interests."
        ],
        "MoreInfo": {
            "EducationRequirements": "Degrees in Political Science, Public Administration, or Law.",
            "Certifications": ["None typically required, but advanced degrees can be beneficial."],
            "ProfessionalAssociations": [
                "American Political Science Association (APSA)",
                "International Association of Political Consultants (IAPC)"
            ]
        }
    },
    "Academia": {
        "About": "A career in Academia focuses on teaching, research, and scholarship. Academic professionals work at universities and colleges, contributing to their fields of study and guiding the next generation of learners.",
        "Activity": [
            "Teaching: Delivering lectures and seminars, mentoring students.",
            "Research: Conducting and publishing research in academic journals.",
            "Administration: Managing academic departments and contributing to institutional planning.",
            "Consulting: Providing expert advice and services in specialized areas."
        ],
        "CareerRecruiter": [
            "Universities and Colleges: Academic institutions offering teaching and research positions.",
            "Research Institutes: Organizations dedicated to academic and scientific research.",
            "Government Education Agencies: Departments focusing on educational policy and standards.",
            "Publishing Companies: Firms specializing in academic books and journals."
        ],
        "MoreInfo": {
            "EducationRequirements": "Advanced degrees (Master’s, PhD) in specific fields.",
            "Certifications": ["Postdoctoral fellowships and academic credentials."],
            "ProfessionalAssociations": [
                "American Association of University Professors (AAUP)",
                "National Education Association (NEA)"
            ]
        }
    },
    "Finance": {
        "About": "The Finance sector focuses on managing money, investments, and financial planning. Careers in this field include roles in banking, investment, financial planning, and corporate finance, with a focus on analyzing, managing, and growing financial assets.",
        "Activity": [
            "Investment Banking: Raising capital and advising on mergers and acquisitions.",
            "Financial Planning: Helping individuals and businesses plan their financial futures.",
            "Corporate Finance: Managing a company's financial activities and strategies.",
            "Accounting: Tracking and managing financial transactions and reporting."
        ],
        "CareerRecruiter": [
            "Banks and Financial Institutions: Banks, credit unions, and investment firms.",
            "Accounting Firms: Companies offering accounting and auditing services.",
            "Financial Advisory Firms: Businesses providing financial planning and investment advice.",
            "Corporate Finance Departments: Finance teams within corporations."
        ],
        "MoreInfo": {
            "EducationRequirements": "Degrees in Finance, Accounting, Economics, or related fields.",
            "Certifications": [
                "Certified Financial Planner (CFP)",
                "Chartered Financial Analyst (CFA)"
            ],
            "ProfessionalAssociations": [
                "CFA Institute",
                "Financial Planning Association (FPA)"
            ]
        }
    },
    "SocialLife": {
        "About": "A career in Social Life encompasses roles that focus on community engagement, social services, and enhancing the quality of life for individuals and communities. This includes social work, community outreach, and nonprofit management.",
        "Activity": [
            "Social Work: Providing support and services to individuals and families in need.",
            "Community Outreach: Organizing and leading community programs and initiatives.",
            "Nonprofit Management: Running organizations focused on social causes and charitable work.",
            "Counseling: Offering guidance and support in personal and professional matters."
        ],
        "CareerRecruiter": [
            "Nonprofit Organizations: Charities, foundations, and community groups.",
            "Social Services Agencies: Government and private entities providing social support.",
            "Counseling Centers: Organizations offering mental health and counseling services.",
            "Community Centers: Local centers focusing on community development and support."
        ],
        "MoreInfo": {
            "EducationRequirements": "Degrees in Social Work, Psychology, Sociology, or related fields.",
            "Certifications": [
                "Licensed Clinical Social Worker (LCSW)",
                "Certified Nonprofit Professional (CNP)"
            ],
            "ProfessionalAssociations": [
                "National Association of Social Workers (NASW)",
                "American Counseling Association (ACA)"
            ]
        }
    },
    "Beliefs": {
        "About": "A career in Belief involves roles within religious and spiritual organizations, focusing on guiding, supporting, and nurturing the spiritual lives of individuals and communities. This includes religious leaders, counselors, and educators.",
        "Activity": [
            "Spiritual Leadership: Leading religious services and providing spiritual guidance.",
            "Counseling: Offering support and advice based on religious or spiritual beliefs.",
            "Education: Teaching religious studies or spiritual education.",
            "Community Service: Organizing and leading community service projects and initiatives."
        ],
        "CareerRecruiter": [
            "Religious Organizations: Churches, mosques, temples, and other places of worship.",
            "Faith-Based Charities: Organizations providing support and services grounded in faith.",
            "Religious Educational Institutions: Schools and seminaries offering religious studies.",
            "Counseling Centers: Providing spiritual counseling and support services."
        ],
        "MoreInfo": {
            "EducationRequirements": "Degrees in Theology, Religious Studies, or related fields.",
            "Certifications": ["Ordination or certification by religious institutions."],
            "ProfessionalAssociations": [
                "Association of Theological Schools (ATS)",
                "International Association of Pastoral Counselors (IAPC)"
            ]
        }
    }

};
