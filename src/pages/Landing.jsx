import React from "react";

// import component
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Paket from "../components/Paket";

// import gambar
import Slide1 from "../assets/image/slide1.png";
import Slide2 from "../assets/image/slide2.png";
import Slide3 from "../assets/image/slide3.png";
import Image1 from "../assets/image/img-1.png";
import Image2 from "../assets/image/img-2.png";



export default function Landing() {
    const slides = [
        Slide1,
        Slide2,
        Slide3,
      ]
    return (
        <main className="Landing">
            <Navbar />
            <div className='flex max-w justify-between items-center m-[10px] drop-shadow-lg md:mx-[100px]'>
                <Carousel>
                    {slides.map((s) => (
                    <img src={s} alt='Carousel'/>
                    ))}
                </Carousel>
            </div>
            <h1 className="flex flex-col items-center uppercase font-bold text-xl my-[50px] md:text-3xl">Kecantikan untuk semuanya</h1>
            <div className="max-w flex flex-col items-center gap-[150px] lg:gap-[300px] lg:mt-[80px]">
                <div className="w-full flex flex-row items-center justify-end gap-4 p-8 bg-secondary h-[350] md:h-[250px] md:px-[100px] lg:px-[300px] lg:gap-[60px]">
                    <div className="flex flex-col text-end gap-2 lg:gap-8">
                        <h1 className="font-bold text-xl lg:text-2xl px-[50px]">Packages for her</h1>
                        <p className="text-sm lg:text-base">Umumnya wanita ingin tampil cantik dan menawan. Kecantikan diawali dari kulit yang sehat, bersih dan terawat. Manjakan diri anda dan rasakan sendiri bedanya Facial Theraphy KEIKO yang bukan hanya sekedar membersihkan dan mencerahkan tetapi sekaligus memberikan nutrisi ke kulit wajah.</p>
                    </div>
                    <img src={Image2} alt="1" className="h-[180px] drop-shadow md:h-[300px] lg:h-350"/>
                </div>
                <div className="w-full flex flex-row items-center justify-end gap-4 p-8 bg-secondary h-[350] md:h-[250px] md:px-[100px] lg:px-[300px] lg:gap-[60px]">
                    <img src={Image1} alt="2" className="h-[180px] drop-shadow md:h-[300px] lg:h-350"/>
                    <div className="flex flex-col text-start gap-2 lg:gap-8">
                        <h1 className="font-bold text-xl lg:text-2xl px-[50px]">Packages for him</h1>
                        <p className="text-sm lg:text-base">Pada umumnya banyak pria yang kurang memperhatikan perawatan wajahnya jika dibandingkan dengan wanita. Padahal perawatan wajah pria juga sangat penting untuk menjaga penampilan, mempertahankan kesehatan kulit wajah, menjaga elastisitas kulit wajah dan menghindari proses penuaan dini.</p>
                    </div>
                </div>
                <div className="w-full flex flex-row items-center justify-end gap-4 p-8 bg-secondary h-[350] md:h-[250px] md:px-[100px] lg:px-[300px] lg:gap-[60px]">
                    <div className="flex flex-col text-end gap-2 lg:gap-8">
                        <h1 className="font-bold text-xl lg:text-2xl px-[50px]">Skincare</h1>
                        <p className="text-sm lg:text-base">KEIKO Facial Clinic BUKAN-lah Salon Kecantikan yang akan memoles kulit wajah anda dengan kosmetik, tetapi kami akan merawat kulit wajah anda agar terhindar dari berbagai masalah kulit yang klasik seperti : jerawat, kulit kusam, kulit tidak cerah, flek wajah, komedo, dll.</p>
                    </div>
                    <img src={Image2} alt="3" className="h-[180px] drop-shadow md:h-[300px] lg:h-350"/>
                </div>
                <div className="w-full flex flex-row items-center justify-end gap-4 p-8 bg-secondary h-[350] md:h-[250px] md:px-[100px] lg:px-[300px] lg:gap-[60px]">
                    <img src={Image2} alt="4" className="h-[180px] drop-shadow md:h-[300px] lg:h-350"/>
                    <div className="flex flex-col text-start gap-2 lg:gap-8">
                        <h1 className="font-bold text-xl lg:text-2xl px-[50px]">Facial Massage</h1>
                        <p className="text-sm lg:text-base">Facial Massage dan Totok Wajah, merupakan satu rangkaian prosedur treatment dari Paket Facial Lengkap KEIKO. Dengan terapi yang benar dan tepat, akan sangat bermanfaat untuk relaksasi wajah, penyerapan moisturizer yang lebih dalam serta merangsang regenerasi kulit menjadi lebih cepat.</p>
                    </div>
                </div>
                
            </div>
            <Paket/>
            <Testimonial/>
            <Footer/>
        </main>
    )
}