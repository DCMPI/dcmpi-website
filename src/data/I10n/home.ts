import lab from '@images/lab.webp';
import library from '@images/library.webp';
import lecture from '@images/lecture.webp';
import scholarship from '@images/scholarship.webp';
import job from '@images/job.webp';
import infra from '@images/infra.webp';
import classes from '@images/classes.webp';
import peace from '@images/peace.webp';

import plant from '@images/plant.webp';
import time from '@images/time.webp';
import fee from '@images/fee.webp';
import engineering from '@images/engineering.webp';
import civilEng from '@images/civilEng.webp';
import plantScience from '@images/plantScience.webp';
import pharmacy from '@images/pharmacy.webp';

import babitaLekhi from '@images/dcmpi/babitaLekhi.webp';
import babitaKumari from '@images/dcmpi/babitaKumari.webp';
import joshnaRaut from '@images/dcmpi/joshnaRaut.webp';
import ajay from '@images/dcmpi/ajay.webp';
import mahesh from '@images/dcmpi/mahesh.webp';
import abadh from '@images/dcmpi/abadh.webp';
import tilak from '@images/dcmpi/tilak.webp';
import upendra from '@images/dcmpi/upendra.webp';

import lab1 from '@images/dcmpi/lab1.webp';
import lab2 from '@images/dcmpi/lab2.webp';
import lab3 from '@images/dcmpi/lab3.webp';
import class1 from '@images/dcmpi/class1.webp';
import class2 from '@images/dcmpi/class2.webp';
import build1 from '@images/dcmpi/build1.webp';
import build2 from '@images/dcmpi/build2.webp';
import build3 from '@images/dcmpi/build3.webp';
import build4 from '@images/dcmpi/build4.webp';
import build5 from '@images/dcmpi/build5.webp';
import build6 from '@images/dcmpi/build6.webp';
import build8 from '@images/dcmpi/build8.webp';
import library1 from '@images/dcmpi/library1.webp';
import library2 from '@images/dcmpi/library2.webp';
import library3 from '@images/dcmpi/library3.webp';
import jobAlt from '@images/dcmpi/job.webp';

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
    en: 'Contact us',
    np: 'सम्पर्क गर्नुहोस्',
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
    {icon: lecture, title: {en: 'Experienced Professors', np: 'अनुभवी प्रोफेसरहरू'}, images: [babitaLekhi, babitaKumari, joshnaRaut, ajay, tilak, mahesh]},
    {icon: lab, title: {en: 'Modern laboratory', np: 'आधुनिक प्रयोगशाला'}, images: [lab1, lab2, lab3]},
    {icon: library, title: {en: 'Well Stocked Library', np: 'पुस्तकलयको राम्रो व्यवस्था'}, images: [library1, library2, library3]},
    {icon: classes, title: {en: 'Practical Classes', np: 'प्रयोगात्मक कक्षाहरू'}, images: [lab1, class1, class2]},
    {icon: scholarship, title: {en: 'Scholarship available', np: 'विभिन्न छात्रवृत्तिको व्यवस्था'}, images: [civilEng, pharmacy, jobAlt]},
    {icon: job, title: {en: 'Job Placement', np: 'रोजगारीको अवसर'}, images: [civilEng, pharmacy, jobAlt]},
    {icon: infra, title: {en: 'Infrastructure & amenities', np: 'सुबिधा सम्पन्न भौतिक पूर्वाधार'}, images: [build4, build5, build8]},
    {icon: peace, title: {en: 'Peaceful environment', np: 'शान्त र स्वच्छ वातावरण'}, images: [build1, build2, build3]},
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
        en: 'View Syllabus',
        np: 'पाठ्यक्रम हेर्नुहोस्',
      },
      buttonLink: 'http://ctevt.org.np/uploads/docs/2021-10-31_diploma_in_civil_engineering_2021.pdf',
      imgSrc: civilEng,
    },
    {
      info: [{icon: plant, title: {en: 'Diploma in Agriculture (Plant Science)', np: 'कृषिमा डिप्लोमा (वनस्पति विज्ञान)'}},
        {icon: time, title: {en: 'Duration - 3 years', np: 'अवधि - ३ वर्ष'}},
        {icon: fee, title: {en: 'Fee - Rs 1,90,000', np: 'शुल्क - रु १,९0,000'}}],
      buttonText: {
        en: 'View Syllabus',
        np: 'पाठ्यक्रम हेर्नुहोस्',
      },
      buttonLink: 'http://ctevt.org.np/uploads/docs/2023-01-18_dipag006_diploma_agriculture_plant_science_revised_2021.pdf',
      imgSrc: plantScience,
    },
    {
      info: [{icon: plant, title: {en: 'Diploma in Pharmacy', np: 'फार्मेसी मा डिप्लोमा'}},
        {icon: time, title: {en: 'Duration - 3 years', np: 'अवधि - ३ वर्ष'}}],
      buttonText: {
        en: 'View Syllabus',
        np: 'पाठ्यक्रम हेर्नुहोस्',
      },
      buttonLink: 'http://ctevt.org.np/uploads/docs/2022-08-26_diphe016_diploma_in_pharmacy_2021.pdf',
      imgSrc: pharmacy,
    },
  ],
};

export const InstructorSectionData = {
  title: {
    en: 'Instructors',
    np: 'प्रशिक्षकहरू',
  },
  subtitle: {
    en: 'DCMPI instructors are passionate about teaching. Here are a few of the people we are pleased to say are part of the DCMPI team.',
    np: 'DCMPI को प्रशिक्षकहरू शिक्षणको बारेमा भावुक छन्। यहाँ केहि व्यक्तिहरू छन् जसलाई हामीले DCMPI टोलीको हिस्सा भन्न पाउँदा खुसी छौं।',
  },
  teachers: [{
    img: babitaLekhi,
    status: {
      en: 'Principal',
      np: 'प्रिन्सिपल',
    },
    name: {
      en: 'Babita Lekhi',
      np: 'बबिता लेखी',
    },
  },
  {
    img: joshnaRaut,
    status: {
      en: 'Chemistry lecturer',
      np: 'रसायन विज्ञान अध्यापक',
    },
    name: {
      en: 'Joshna Raut',
      np: 'जोस्ना राउत',
    },
  },
  {
    img: babitaKumari,
    status: {
      en: 'English lecturer',
      np: 'अंग्रेजी अध्यापक',
    },
    name: {
      en: 'Babita Kumari Chaudhary',
      np: 'बबिता कुमारी चौधरी',
    },
  },
  {
    img: ajay,
    status: {
      en: 'Co-ordinator',
      np: 'संयोजक',
    },
    name: {
      en: 'Er. Ajay Chaudhary',
      np: 'ई. अजय चौधरी',
    },
  },
  {
    img: mahesh,
    status: {
      en: 'Math lecturer',
      np: 'गणित अध्यापक',
    },
    name: {
      en: 'Mahesh Chaudhary',
      np: 'महेश चौधरी',
    },
  },
  {
    img: abadh,
    status: {
      en: 'Administrator',
      np: 'प्रशासक',
    },
    name: {
      en: 'Abadh Narayan Chaudhary',
      np: 'अवध नारायण चौधरी',
    },
  },
  {
    img: tilak,
    status: {
      en: 'Physics lecturer',
      np: 'भौतिकशास्त्र अध्यापक',
    },
    name: {
      en: 'Tilak Ram Mehta',
      np: 'तिलक राम मेहता',
    },
  },
  {
    img: upendra,
    status: {
      en: 'Botany & Zoology lecturer',
      np: 'वनस्पति र प्राणीशास्त्र अध्यापक',
    },
    name: {
      en: 'Upendra Chaudhary',
      np: 'उपेन्द्र चौधरी',
    },
  },
  ],
};

export const GallerySectionData = {
  title: {
    en: 'Gallery',
    np: 'ग्यालेरी',
  },
  subtitle: {
    en: '',
    np: '',
  },
  images: [
    build8, class1, build6, lab1, build3, lab2, lab3, class2, build1, build2, build4, build5,
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
  address: [{
    en: 'Sunsari, Nepal',
    np: 'सुनसरी, नेपाल',
  }, {
    en: 'Inaruwa road, Duhabi-2',
    np: 'इनरुवा सडक, दुहबी-२',
  }],
  phoneTitle: {
    en: 'PHONE NO',
    np: 'फोन नं',
  },
  phoneNo: [{
    en: '025-543216',
    np: '०२५-५४३२१६',
  }, {
    en: '(+977) 9842059009',
    np: '(+९७७) ९८४२०५९००९',
  }, {
    en: '(+977) 9802788633',
    np: '(+९७७) ९८०२७८८६३३',
  },
  ],
  emailTitle: {
    en: 'Email',
    np: 'इ - मेल',
  },
  dcmpiEmail: [{
    en: 'dcmpi.edu.np@gmail.com',
    np: 'dcmpi.edu.np@gmail.com',
  },
  {
    en: 'dineshpratisthan@gmail.com',
    np: 'dineshpratisthan@gmail.com',
  }],

};

export const navData = {
  info: {
    en: 'For more information: 025-543216, 9842059009, 9802788633',
    np: 'थप जानकारीको लागि: ०२५-५४३२१६, ९८४२०५९००९, ९८०२७८८६३३',
  },
  feature: {
    en: 'Feature',
    np: 'विशेषता',
  },
  course: {
    en: 'Course',
    np: 'पाठ्यक्रम',
  },
  instructor: {
    en: 'Instructor',
    np: 'प्रशिक्षक',
  },
  contact: {
    en: 'Contact',
    np: 'सम्पर्क',
  },
  btnText: {
    en: 'Register',
    np: 'दर्ता गर्नुहोस्',
  },
};
