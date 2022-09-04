import lab from '@images/lab.png';
import library from '@images/library.png';
import lecture from '@images/lecture.png';
import scholarship from '@images/scholarship.png';
import job from '@images/job.png';
import infra from '@images/infra.png';
import classes from '@images/classes.png';

import plant from '@images/plant.png';
import time from '@images/time.png';
import fee from '@images/fee.png';
import engineering from '@images/engineering.png';

export const heroSectionData = {
  title: {
    en: 'Dinesh Chaudhary Memorial Polytechnic Institute',
    np: 'दिनेश चौधरी मेमोरियल पोलिटेक्निक इन्स्टिच्युट',
  },
  subtitle: {
    en: 'Operated by the Dinesh Chaudhary Memorial Foundation',
    np: 'दिनेश चौधरी स्मृति प्रतिष्ठान द्वारा सञ्चालित।',
  },
  buttonText: {
    en: 'CONTACT US',
    np: 'सम्पर्क गर्नुहोस',
  },
};

export const featureSectionData = {
  title: {
    en: 'Feature',
    np: 'विशेषता',
  },
  subtitle: {
    en: 'Student centricity is the core value of DCMPI. Every activity, be it curricular, co-curricular or extra-curricular, is designed to keep the growth and development of students in mind.',
    np: 'विद्यार्थी केन्द्रितता DCMPI को मूल मान हो। प्रत्येक क्रियाकलाप, चाहे त्यो पाठ्यक्रम, सह-पाठ्यक्रम वा अतिरिक्त-पाठ्यक्रम होस्, विद्यार्थीहरूको वृद्धि र विकासलाई ध्यानमा राखेर डिजाइन गरिएको हो।',
  },
  cards: [
    {icon: lecture, title: {en: 'Experienced Professors', np: 'अनुभवी प्रोफेसरहरू'}},
    {icon: lab, title: {en: 'Modern laboratory', np: 'आधुनिक प्रयोगशाला'}},
    {icon: library, title: {en: 'Well Stocked Library', np: 'पुस्तकलयको राम्रो व्यवस्था'}},
    {icon: classes, title: {en: 'Practical Classes', np: 'प्रयोगात्मक कक्षाहरू'}},
    {icon: scholarship, title: {en: 'Scholorship available', np: 'विभिन्न छात्रवृत्तिको व्यवस्था'}},
    {icon: job, title: {en: 'Job Placement', np: 'रोजगारीको अवसर'}},
    {icon: infra, title: {en: 'Infrastructure & amenities', np: 'सुबिधा सम्पन्न भौतिक पूर्वाधार'}},
    {icon: infra, title: {en: 'Peaceful environment', np: 'शान्त र स्वच्छ वातावरण'}},
  ],
};

export const courseSectionData = {
  title: {
    en: 'Course',
    np: 'पाठ्यक्रम',
  },
  subtitle: {
    en: 'DCMPI is the technical institution affiliated to the CTEVT, which offers Diploma in Civil Engineering and Diploma in Agriculture (Plant Science).',
    np: 'DCMPI CTEVT बाट मान्यता प्राप्ता प्राविधिक संस्था हो, जसले सिभिल इन्जिनियरिङमा डिप्लोमा र कृषिमा डिप्लोमा (बिरुवा विज्ञान) प्रदान गर्दछ।',
  },
  cards: [
    {
      info: [{icon: engineering, title: {en: 'Diploma in Civil Engineering', np: 'सिभिल इन्जिनियरिङमा डिप्लोमा'}},
        {icon: time, title: {en: 'Duration - 3 years', np: 'अवधि - ३ वर्ष'}},
        {icon: fee, title: {en: 'Fee - Rs 2,00,000', np: 'शुल्क - रु २,00,000'}}],
      buttonText: {
        en: 'VIEW SYLLABUS',
        np: 'पाठ्यक्रम हेर्नुहोस्',
      },
      buttonLink: 'http://ctevt.org.np/uploads/docs/2021-10-31_diploma_in_civil_engineering_2021.pdf',
    },
    {
      info: [{icon: plant, title: {en: 'Diploma in Agriculture (Plant Science)', np: 'कृषिमा डिप्लोमा (वनस्पति विज्ञान)'}},
        {icon: time, title: {en: 'Duration - 3 years', np: 'अवधि - ३ वर्ष'}},
        {icon: fee, title: {en: 'Fee - Rs 1,90,000', np: 'शुल्क - रु १,९0,000'}}],
      buttonText: {
        en: 'VIEW SYLLABUS',
        np: 'पाठ्यक्रम हेर्नुहोस्',
      },
      buttonLink: 'http://ctevt.org.np/uploads/docs/2019-02-20_Isc%20Ag%20Plant%20Science%20Revised_19%20May,2014.pdf',
    },
  ],
};

export const contactSectionData = {
  title: {
    en: 'Contact',
    np: 'सम्पर्क गर्नुहोस्',
  },
  subtitle: {
    en: 'We would love to hear from you and see how we can help.',
    np: 'हामी तपाईंबाट सुन्न र हामी कसरी मद्दत गर्न सक्छौं हेर्न चाहन्छौं।',
  },
  name: {
    en: 'Your name',
    np: 'तपाईँको नाम',
  },
  email: {
    en: 'Your email address',
    np: 'तपाईँको ई-मेल ठेगाना',
  },
  message: {
    en: 'Write your message here',
    np: 'यहाँ आफ्नो सन्देश लेख्नुहोस्',
  },
  buttonText: {
    en: 'Send Message',
    np: 'सन्देश पठाउनुहोस्',
  },
  addressTitle: {
    en: 'ADDRESS',
    np: 'ठेगाना',
  },
  address: {
    en: 'Duhabi-2, Sunsari, Nepal',
    np: 'दुहबी-२, सुनसरी, नेपाल',
  },
  phoneTitle: {
    en: 'PHONE NO',
    np: 'फोन नं',
  },
  phoneNo: {
    en: '(+977) 9802788587',
    np: '(+९७७) ९८०२७८८५८७',
  },

};

export const navData = {
  info: {
    en: 'Admission Open!! limited seats available',
    np: 'भर्ना खुल्यो !! सीमित सिट उपलब्ध छ।',
  },
  feature: {
    en: 'Feature',
    np: 'विशेषता',
  },
  course: {
    en: 'Course',
    np: 'पाठ्यक्रम',
  },
  contact: {
    en: 'Contact',
    np: 'सम्पर्क',
  },
  btnText: {
    en: 'REGISTER',
    np: 'दर्ता गर्नुहोस्',
  },
};
