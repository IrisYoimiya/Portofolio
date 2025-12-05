import fotoProfil from './assets/foto_profile.jpg'
import machineLearning from './assets/MachinLearning.png'
import laravel from './assets/Laravel.png'
import foodWebsite from './assets/food-webiste.png'

export const PROFILE = {
  name : "M Alfajry Naufal",
  about: "Saya adalah seorang mahasiswa yang memiliki minat dalam pengembangan web dan kecerdasan buatan. Saya terus berusaha untuk mengasah kemampuan teknis sekaligus mengembangkan keterampilan kepemimpinan. Portofolio ini menampilkan kumpulan proyek yang telah saya kerjakan, masing-masing mencerminkan semangat, keinginan untuk belajar, serta dedikasi saya dalam menciptakan solusi inovatif dan bermakna di bidang teknologi.",
  socials: {
    github: "https://github.com/IrisYoimiya",
    linkedin: "https://www.linkedin.com/in/alfajry-naufal-707962215",
    email: "alfajrynaufalll@gmail.com"
  },
  avatar : fotoProfil
};

export const SKILLS = [
  "React", "JavaScript", "Laravel", "Tailwind CSS", "Python", "MySQL", "Git"
];

export const EXPERIENCES = [
  {
    id: 1,
    role: "Freshman Leader",
    company: "Binus",
    period: "2025",
    description: "Membimbing mahasiswa baru selama masa orientasi agar dapat beradaptasi dengan lingkungan kampus dan sistem pembelajaran BINUS"
  },
  {
    id: 2,
    role: "COMMITE BINUS FESTIVAL",
    company: "Binus",
    period: "2023",
    description: "Berkoordinasi dengan tim untuk memastikan kegiatan di setiap booth berjalan lancar selama acara berlangsung. Mencatat dan mengelola absensi masing-masing booth untuk memantau kehadiran dan kelancaran operasional acara."
  },
  {
    id: 3,
    role: "MENGAJAR PAUD",
    company: "Jakarta",
    period: "2025",
    description: "Mengajar anak usia dini dengan pendekatan interaktif, menyiapkan materi pembelajaran harian, dan membuat laporan akhir kegiatan belajar mengajar sebagai evaluasi terhadap proses dan hasil pembelajaran. "
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Dalam proyek machine learning ini, saya membangun model untuk memprediksi genre berita menggunakan algoritma Random Forest. Selama prosesnya, saya mempelajari cara melakukan vektorisasi teks, menerapkan teknik pembersihan data, dan menyiapkan data untuk pelatihan model. Selain itu, saya juga memperoleh pengalaman dalam menerapkan model machine learning ke dalam aplikasi web menggunakan Flask, sehingga dapat digunakan secara interaktif oleh pengguna.",
    tags: ["Html & CSS", "Javascript", "Python"],
    link: "https://github.com/IrisYoimiya/News-Categorical-Predictor.git",
    image: machineLearning
  },
  {
    id: 2,
    title: "Laravel CRUD",
    description: "Pada project simple laravel CRUD ini saya belajar bagaimana cara membuat sebuah website yang dapat berinteraksi dengan database MySql. dan saya saya juga mempelajari bagaiamana cara untuk implementasi hubungan table One to Many pada laravel",
    tags: ["Laravel", "Tailwind", "MySQL"],
    link: "https://github.com/IrisYoimiya/laravelCRUD.git",
    image : laravel
  },
  {
    id: 3,
    title: "Food Website",
    description: "Pada project akhir mata kulia Human Computer Interaction ini saya membuat sebuah website dengan HTML, CSS dan Javascript",
    tags: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/IrisYoimiya/food-website.git",
    image: foodWebsite
  }
];