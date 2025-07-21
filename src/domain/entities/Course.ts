export interface Course {
  id: string;
  slug: string;
  title: string;
  thumbnail_url: string;
  thumbnail_video_url: string;
  tutors: {
    id: string;
    name: string;
    bio: string;
    description: string;
    avatar_url: string;
  }[];
  popularity: number;
  difficulty_level: string;
  categories: {
    id: string;
    name: string;
  }[];
  plan: string;
}

//          "id":"c4f8aa40-d06e-4731-b6bd-4221632df06c",
//          "slug":"crash-course-docker-for-absolute-beginner",
//          "title":"Crash Course: Docker For Absolute Beginners",
//          "thumbnail_url":"http://res.cloudinary.com/kodekloud/image/upload/v1749702217/Docker_Crash_tpsqdf.png",
//          "thumbnail_video_url":"https://vimeo.com/1087968783",
//          "tutors":[
//             {
//                "id":"6509904a-d41d-469e-aba5-807ecb9cb04f",
//                "name":"Mumshad Mannambeth",
//                "bio":"Founder of KodeKloud | an IT Consultant | Certified Kubernetes Administrator",
//                "description":"Mumshad is passionate about sharing his knowledge and teaches over 600,000+ students worldwide. He believes the best way to learn is to learn by doing and in a fun way. He has authored multiple courses on DevOps and Cloud \u0026 Automation technologies. Mumshad's courses focus on providing students with an interactive and hands-on experience in learning new technology that makes it fun \u0026 exciting.",
//                "avatar_url":"https://res.cloudinary.com/kodekloud/image/upload/v1721047734/trainer-profile/Trainer-Mumshad.png"
//             }
//          ],
//          "popularity":10,
//          "difficulty_level":"beginner",
//          "categories":[
//             {
//                "id":"71026d71-6cc9-4e4e-9422-a5bdb59892bd",
//                "name":"DevOps"
//             },
//             {
//                "id":"dd9375bd-2232-49ae-9e40-57fc0922d9a9",
//                "name":"Containers"
//             }
//          ],
//          "plan":"Free"
