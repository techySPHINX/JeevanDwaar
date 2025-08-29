export interface ContentData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    findPolicyBtn: string;
    learnInsuranceBtn: string;
    stats: {
      customers: string;
      premium: string;
      service: string;
    };
  };
  threeThings: {
    title: string;
    subtitle: string;
    coverage: {
      title: string;
      description: string;
      example: string;
    };
    exclusion: {
      title: string;
      description: string;
      example: string;
    };
    helpline: {
      title: string;
      description: string;
      number: string;
    };
  };
  policyExplainer: {
    title: string;
    subtitle: string;
    voiceTitle: string;
    keyFacts: string;
  };
}

export const content: Record<string, ContentData> = {
  hindi: {
    hero: {
      title: "जीवन बीमा सरल बनाया",
      subtitle: "आपकी भाषा में • Life Insurance Made Simple – In Your Language",
      description: "विश्वसनीय, पारदर्शी, और समझने योग्य जीवन बीमा। ग्रामीण और अर्ध-शहरी परिवारों के लिए विशेष रूप से डिज़ाइन किया गया।",
      findPolicyBtn: "मेरी पॉलिसी खोजें",
      learnInsuranceBtn: "बीमा के बारे में जानें",
      stats: {
        customers: "संतुष्ट ग्राहक",
        premium: "न्यूनतम प्रीमियम",
        service: "ग्राहक सेवा"
      }
    },
    threeThings: {
      title: "3 बातें जो आपको पता होनी चाहिए",
      subtitle: "हर पॉलिसी के लिए महत्वपूर्ण जानकारी",
      coverage: {
        title: "कवरेज अवधि",
        description: "आपकी पॉलिसी कितने साल तक चलेगी",
        example: "उदाहरण: 20 साल"
      },
      exclusion: {
        title: "मुख्य बहिष्करण",
        description: "यह स्थिति कवर नहीं होती",
        example: "आत्महत्या (2 साल)"
      },
      helpline: {
        title: "क्लेम हेल्पलाइन",
        description: "तुरंत सहायता के लिए कॉल करें",
        number: "1800-22-9090"
      }
    },
    policyExplainer: {
      title: "पॉलिसी समझाने वाला",
      subtitle: "आवाज़ में सुनें, आसान भाषा में समझें",
      voiceTitle: "आवाज़ में सुनें (30 सेकंड)",
      keyFacts: "मुख्य तथ्य"
    }
  },
  english: {
    hero: {
      title: "Life Insurance Made Simple",
      subtitle: "In Your Language • आपकी भाषा में",
      description: "Trusted, transparent, and understandable life insurance. Specially designed for rural and semi-urban families.",
      findPolicyBtn: "Find My Policy",
      learnInsuranceBtn: "Learn About Insurance",
      stats: {
        customers: "Satisfied Customers",
        premium: "Minimum Premium",
        service: "Customer Service"
      }
    },
    threeThings: {
      title: "3 Things You Must Know",
      subtitle: "Important information for every policy",
      coverage: {
        title: "Coverage Period",
        description: "How long your policy will run",
        example: "Example: 20 years"
      },
      exclusion: {
        title: "Main Exclusion",
        description: "This condition is not covered",
        example: "Suicide (2 years)"
      },
      helpline: {
        title: "Claim Helpline",
        description: "Call for immediate assistance",
        number: "1800-22-9090"
      }
    },
    policyExplainer: {
      title: "Policy Explainer",
      subtitle: "Listen in voice, understand in simple language",
      voiceTitle: "Listen in Voice (30 seconds)",
      keyFacts: "Key Facts"
    }
  }
};
