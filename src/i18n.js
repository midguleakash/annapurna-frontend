//  this file for translation support

// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navbar
        home: "Home",
        about: "About Us",
        contact: "Contact",
        login: "Login",
        get_started: "Get Started",
        tagline: "Food Donation Platform",

        // Home Page
        hero_title_1: "End Food Waste,",
        hero_title_2: "Feed Those in Need",
        hero_desc:
          "Annapurna connects food donors with receivers through technology. Scan, donate, and track in real-time. Together, we can make a difference.",
        start_donating: "Start Donating",

        // Features
        features_title: "Powerful Features for",
        features_highlight: "Maximum Impact",
        features_subtitle:
          "Our platform combines cutting-edge technology with ease of use",

        feature1_title: "Smart QR Scanner",
        feature1_desc:
          "Quickly register donations with QR/Barcode scanning or image recognition technology",

        feature2_title: "Real-Time Tracking",
        feature2_desc:
          "Track your donations from pickup to delivery with live map integration",

        feature3_title: "Multi-Language Support",
        feature3_desc:
          "Available in English, Hindi, and Marathi for wider accessibility",

        feature4_title: "Automated Coordination",
        feature4_desc:
          "Smart algorithms match donors with receivers and coordinate pickups automatically",

        feature5_title: "Community Network",
        feature5_desc:
          "Join thousands of donors and NGOs working together to end food waste",

        feature6_title: "Verified Recipients",
        feature6_desc:
          "All receivers are verified to ensure your donations reach those truly in need",

        // Footer
        footer_desc:
          "Connecting donors with those in need. Together, we can end food waste and hunger.",
        quick_links: "Quick Links",
        support: "Support",
        help_center: "Help Center",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        footer_contact: "Contact",
        made_with: "Made with",
      },
    },

    hi: {
      translation: {
        home: "होम",
        about: "हमारे बारे में",
        contact: "संपर्क",
        login: "लॉगिन",
        get_started: "शुरू करें",
        tagline: "भोजन दान मंच",

        hero_title_1: "खाद्य अपव्यय समाप्त करें,",
        hero_title_2: "ज़रूरतमंदों को खिलाएं",
        hero_desc:
          "अन्नपूर्णा तकनीक के माध्यम से दाताओं को जरूरतमंदों से जोड़ता है। स्कैन करें, दान करें और रियल-टाइम में ट्रैक करें।",

        start_donating: "दान शुरू करें",

        features_title: "शक्तिशाली विशेषताएं",
        features_highlight: "अधिकतम प्रभाव के लिए",
        features_subtitle:
          "हमारा प्लेटफ़ॉर्म आधुनिक तकनीक और उपयोग में आसान है",

        feature1_title: "स्मार्ट QR स्कैनर",
        feature1_desc: "QR/बारकोड स्कैनिंग से जल्दी दान दर्ज करें",

        feature2_title: "रियल-टाइम ट्रैकिंग",
        feature2_desc: "दान को लाइव ट्रैक करें",

        feature3_title: "बहुभाषी समर्थन",
        feature3_desc: "अंग्रेजी, हिंदी और मराठी में उपलब्ध",

        feature4_title: "स्वचालित समन्वय",
        feature4_desc: "स्मार्ट सिस्टम दाता और रिसीवर को जोड़ता है",

        feature5_title: "समुदाय नेटवर्क",
        feature5_desc: "हजारों लोगों से जुड़ें",

        feature6_title: "सत्यापित प्राप्तकर्ता",
        feature6_desc: "सभी रिसीवर सत्यापित हैं",

        footer_desc: "हम मिलकर भूख और भोजन की बर्बादी खत्म कर सकते हैं",
        quick_links: "त्वरित लिंक",
        support: "सहायता",
        help_center: "सहायता केंद्र",
        privacy: "गोपनीयता नीति",
        terms: "नियम और शर्तें",
        footer_contact: "संपर्क",
        made_with: "निर्मित किया गया",
      },
    },

    mr: {
      translation: {
        home: "मुख्यपृष्ठ",
        about: "आमच्याबद्दल",
        contact: "संपर्क",
        login: "लॉगिन",
        get_started: "सुरू करा",
        tagline: "अन्न दान प्लॅटफॉर्म",

        hero_title_1: "अन्न वाया जाणे थांबवा,",
        hero_title_2: "गरजूंना अन्न द्या",
        hero_desc:
          "अन्नपूर्णा तंत्रज्ञानाद्वारे दाते आणि गरजूंना जोडते. स्कॅन करा, दान करा आणि ट्रॅक करा.",

        start_donating: "दान सुरू करा",

        features_title: "शक्तिशाली वैशिष्ट्ये",
        features_highlight: "जास्तीत जास्त परिणामासाठी",
        features_subtitle:
          "आमचे प्लॅटफॉर्म आधुनिक तंत्रज्ञानासह सोपे आहे",

        feature1_title: "स्मार्ट QR स्कॅनर",
        feature1_desc: "QR स्कॅन करून दान नोंदवा",

        feature2_title: "रिअल-टाइम ट्रॅकिंग",
        feature2_desc: "दानाचा मागोवा घ्या",

        feature3_title: "बहुभाषिक समर्थन",
        feature3_desc: "इंग्रजी, हिंदी, मराठी उपलब्ध",

        feature4_title: "स्वयंचलित समन्वय",
        feature4_desc: "सिस्टम दाते आणि रिसीव्हर जुळवते",

        feature5_title: "समुदाय नेटवर्क",
        feature5_desc: "हजारो लोकांशी जोडा",

        feature6_title: "सत्यापित प्राप्तकर्ते",
        feature6_desc: "सर्व प्राप्तकर्ते तपासलेले आहेत",

        footer_desc: "आपण मिळून भूक आणि अन्न वाया जाणे थांबवू शकतो",
        quick_links: "जलद दुवे",
        support: "सपोर्ट",
        help_center: "मदत केंद्र",
        privacy: "गोपनीयता धोरण",
        terms: "अटी व शर्ती",
        footer_contact: "संपर्क",
        made_with: "तयार केले",
      },
    },
  },

  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;