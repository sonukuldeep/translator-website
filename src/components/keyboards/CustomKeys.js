const keys = {

  hindi: {
    default: [
      "` \u090D \u0945 \u094D\u0930 \u0930\u094D \u091C\u094D\u091E \u0924\u094D\u0930 \u0915\u094D\u0937 \u0936\u094D\u0930 \u096F \u0966 - \u0943 {bksp}",
      "{tab} \u094C \u0948 \u093E \u0940 \u0942 \u092C \u0939 \u0917 \u0926 \u091C \u0921 \u093C \u0949 \\",
      "{lock} \u094B \u0947 \u094D \u093F \u0941 \u092A \u0930 \u0915 \u0924 \u091A \u091F {enter}",
      "{shift} \u0902 \u092E \u0928 \u0935 \u0932 \u0938 , . \u092F {shift}",
      ".com @ {space}",
    ],
    shift: [
      "~ \u0967 \u0968 \u0969 \u096A \u096B \u096C \u096D \u096E \u096F \u0966 \u0903 \u090B {bksp}",
      "{tab} \u0914 \u0910 \u0906 \u0908 \u090A \u092D \u0919 \u0918 \u0927 \u091D \u0922 \u091E \u0911",
      "{lock} \u0913 \u090F \u0905 \u0907 \u0909 \u092B \u0931 \u0916 \u0925 \u091B \u0920 {enter}",
      "{shift} \" \u0901 \u0923 \u0928 \u0935 \u0933 \u0936 \u0937 \u0964 \u095F {shift}",
      ".com @ {space}",
    ],
  },
  odia: {
    default: [
      "\u0B66 \u0B67 \u0B68 \u0B69 \u0B6A \u0B6B \u0B6C \u0B6D \u0B6E \u0B6F \u0B0B \u0B43 {bksp}",
      "{tab} \u0B4C \u0B48 \u0B3E \u0B40 \u0B42  \u0B2C \u0B39 \u0B17 \u0B26 \u0B1C \u0B21 \u0B3C",
      "\u0B4B \u0B47 \u0B4D \u0B3F \u0B41 \u0B2A \u0B30 \u0B15 \u0B24 \u0B1A \u0B1F {enter}",
      "{shift} \u0B5F \u0B02 \u0B2E \u0B28 \u0B71 \u0B32 \u0B38 \u002C \u002E \u0B5F {shift}",
      ".com @ {space}",
    ],
    shift: [
      "\u0B4D\u0B30 \u0B30\u0B4D \u0B1C\u0B4D\u0B1E \u0B24\u0B4D\u0B30 \u0B15\u0B4D\u0B37 \u0B36\u0B4D\u0B30 \u0028 \u0029  \u0B03 \u0B60 \u0B44 {bksp}",
      "{tab} \u0B14 \u0B10 \u0B06 \u0B08 \u0B0A \u0B2D \u0B19 \u0B18 \u0B27 \u0B1D \u0B22 \u0B5C \u0B1E",
      "\u0B13 \u0B0F \u0B05 \u0B62 \u0B07 \u0B09 \u0B2B \u0B16 \u0B25 \u0B1B \u0B20 {enter}",
      "{shift} \u0B71 \u0B01 \u0B70 \u0B23 \u0B35 \u0B33 \u0B36 \u0B37 \u0964 \u0B2F {shift}",
      ".com @ {space}",
    ],
  },
  urdu: {
    default: [
      "` \u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660 - = {bksp}",
      "{tab} \u0642 \u0648 \u0639 \u0631 \u062A \u06D2 \u0621 \u0649 \u06C1 \u067E [ ]",
      "{lock} \u0627 \u0633 \u062F \u0641 \u06AF \u06BE \u062C \u06A9 \u0644 \u061B \u060C {enter}",
      "{shift} \u0632 \u0634 \u0686 \u0637 \u0628 \u0646 \u0645 \u06E4 , . / {shift}",
      ".com @ {space}",
    ],
    shift: [
      "~ ! @ # $ \u066A ^ & * ( ) _ + {bksp}",
      "{tab} \uFE70 \uFE77 \uFE79 \u0691 \u0679 \uFE7A \uFEFB \uFE8B \u0629 | { }",
      "{lock} \u0622 \u0635 \u0688 \u060D \u063A \u062D \u0636 \u062E \u06D4 \u0703 \u05f4 {enter}",
      "{shift} \u0630 \u0698 \u062B \u0638 \u06BA \u066b \u0640 < > \u061F {shift}",
      ".com @ {space}",
    ],
  },
  telugu: {
    default: [
      "\u0C4A 1 2 3 4 5 6 7 8 9 0 - \u0C43 {bksp}",
      "{tab} \u0C4C \u0C48 \u0C3E \u0C40 \u0C42 \u0C2C \u0C39 \u0C17 \u0C26 \u0C1C \u0C21  ",
      "{lock} \u0C4B \u0C47 \u0C4D \u0C3F \u0C41 \u0C2A \u0C30 \u0C15 \u0C24 \u0C1A \u0C1F {enter}",
      "{shift}  \u0C46 \u0C02 \u0C2E \u0C28 \u0C35 \u0C32 \u0C38 , . \u0C2F {shift}",
      ".com @ {space}",
    ],
    shift: [
      "\u0C12   \u0C4D\u0C30  \u0C1C\u0C4D\u0C1E \u0C24\u0C4D\u0C30 \u0C15\u0C4D\u0C37 \u0C36\u0C4D\u0C30 ( ) \u0C03 \u0C0B {bksp}",
      "{tab} \u0C14 \u0C10 \u0C06 \u0C08 \u0C0A \u0C2D \u0C19 \u0C18 \u0C27 \u0C1D \u0C22 \u0C1E ",
      "{lock} \u0C13 \u0C0F \u0C05 \u0C07 \u0C09 \u0C2B \u0C31 \u0C16 \u0C25 \u0C1B \u0C20 {enter}",
      "{shift}  \u0C0E \u0C01 \u0C23 \u0C28  \u0C33 \u0C36 \u0C37   {shift}",
      ".com @ {space}",
    ],
  },
  bengali: {
    default: [
      "\u200C \u09e7 \u09e8 \u09e9 \u09ea \u09eb \u09ec \u09ed \u09ee \u09ef \u09e6 - = {bksp}",
      "{tab} \u09b8 \u09b9 \u09c7 \u09be \u09bf \u09c1 \u09cb \u0995 \u0997 \u0999 \u09af \u0982 \u09cd",
      "{lock} \u0985 \u0987 \u0989 \u099f \u09a1 \u09a8 \u09a4 \u09a6 \u09aa ; ' {enter}",
      "{shift} \u09ac \u09ae \u099a \u099c \u09b0 \u09b2 \u09b6 , . / {shift}",
      ".com @ {space}",
    ],
    shift: [
      "\u200d ! \u09cd\u09af \u09cd\u09b0 \u09f3 \u0025 \u0964 \u09b0\u09cd \u00d7 ( ) \u0981 + {bksp}",
      "{tab} \u0993 \u0994 \u09c8 \u09c3 \u09c0 \u09c2 \u09cc \u0996 \u0998 \u098b \u09df \u09ce \u0983",
      '{lock} \u0986 \u0988 \u098a \u09a0 \u09a2 \u09a3 \u09a5 \u09a7 \u09ab : " {enter}',
      "{shift} \u09ad \u099e \u099b \u099d \u09dc \u09dd \u09b7 \u098f \u0990 ? {shift}",
      ".com @ {space}",
    ],
  },
  kannada: {
    default: [
      "\u0cca 1 2 3 4 5 6 7 8 9 0 - \u0cc3 {bksp}",
      "{tab} \u0ccc \u0cc8 \u0cbe \u0cc0 \u0cc2 \u0cac \u0cb9 \u0c97 \u0ca6 \u0c9c \u0ca1",
      "\u0ccb \u0cc7 \u0ccd \u0cbf \u0cc1 \u0caa \u0cb0 \u0c95 \u0ca4 \u0c9a \u0c9f {enter}",
      "{shift} \u0cc6 \u0c82 \u0cae \u0ca8 \u0cb5 \u0cb2 \u0cb8 , . / {shift}",
      ".com @ {space}",
    ],
    shift: [
      "\u0c92 \u0ccd\u0cb0 \u0cb0\u0ccd \u0c9c\u0ccd\u0c9e \u0ca4\u0ccd\u0cb0 \u0c95\u0ccd\u0cb7 \u0cb6\u0ccd\u0cb0 ( ) \u0c83 \u0c8b {bksp}",
      "{tab} \u0c94 \u0c90 \u0c86 \u0c88 \u0c8a \u0cad \u0c99 \u0c98 \u0ca7 \u0c9d \u0ca2 \u0c9e",
      "\u0c93 \u0c8f \u0c85 \u0c87 \u0c89 \u0cab \u0cb1 \u0c96 \u0ca5 \u0c9b \u0ca0 {enter}",
      "{shift} \u0c8e \u0ca3 \u0cb3 \u0cb6 \u0cb7 | / {shift}",
      ".com @ {space}",
    ],
  },
  malayalam: {
    default: [
      "\u0D12 \u0D67 \u0D68 \u0D69 \u0D6A \u0D6B \u0D6C \u0D6D \u0D6E \u0D6F \u0D66 - \u0D0B {bksp}",
      "{tab} \u0D14 \u0D10 \u0D06 \u0D08 \u0D0A \u0D2D \u0D19 \u0D18 \u0D27 \u0D1D \u0D22 \u0D1E \\",
      "{lock} \u0D13 \u0D0F \u0D05 \u0D07 \u0D09 \u0D2B \u0D31 \u0D16 \u0D25 \u0D1B \u0D20 {enter}",
      "{shift} \u0D0E \u0D03 \u0D23 \u0D34 \u0D33 \u0D36 \u0D37 . \u0D2F {shift}",
      ".com @ {space}",
    ],
    shift: [
      "\u0D4A ! @ # $ % ^ & * ) ( _ \u0D43 {bksp}",
      "{tab} \u0D4C \u0D48 \u0D3E \u0D40 \u0D42 \u0D2C \u0D39 \u0D17 \u0D26 \u0D1C \u0D21 \u0D4E \\",
      "{lock} \u0D4B \u0D47 \u0D4D \u0D3F \u0D41 \u0D2A \u0D30 \u0D15 \u0D24 \u0D1A \u0D1F {enter}",
      "{shift} \u0D46 \u0D02 \u0D2E \u0D28 \u0D35 \u0D32 \u0D38 . \u0D2F {shift}",
      ".com @ {space}",
    ],
  },
  punjabi: {
    default: [
      " 1 2 3 4 5 6 7 8 9 0 -  {bksp}",
      "{tab} \u0A4C \u0A48 \u0A3E \u0A40 \u0A42 \u0A2C \u0A39 \u0A17 \u0A26 \u0A1C \u0A21 \u0A3C ",
      "{lock} \u0A4B \u0A47 \u0A4D \u0A3F \u0A41 \u0A2A \u0A30 \u0A15 \u0A24 \u0A1A \u0A1F {enter}",
      "{shift}  \u0A70 \u0A2E \u0A28 \u0A35 \u0A32 \u0A38 , . \u0A2F {shift}",
      ".com @ {space}",
    ],
    shift: [
      "\u0A4D\u0A39 \u0A4D\u0A35 \u0A4D\u0A2F \u0A4D\u0A30 \u0A71     ( )   {bksp}",
      "{tab} \u0A14 \u0A10 \u0A06 \u0A08 \u0A0A \u0A2D \u0A19 \u0A18 \u0A27 \u0A1D \u0A22 \u0A1E ",
      "{lock} \u0A13 \u0A0F \u0A05 \u0A07 \u0A09 \u0A2B \u0A5C \u0A16 \u0A25 \u0A1B \u0A20 {enter}",
      "{shift}  \u0A02 \u0A23  \u0A72 \u0A33 \u0A36  \u0964  {shift}",
      ".com @ {space}",
    ],
  },

}

export default keys