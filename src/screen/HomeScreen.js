import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Kutu from '../components/Kutu'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function HomeScreen() {
    const [modalIsOpen, setModalOpen] = useState(false);

    return (
        <div className='flex flex-col w-auto overflow-hidden'>
            <Navbar modalIsOpen={modalIsOpen} setModalOpen={setModalOpen} ></Navbar>
            <div className='h-[100px]'></div>
            <div className='flex justify-center items-center'>
                <h1 className='font-bold text-5xl text-black shadow-sm'>Örnek Projeler</h1>
            </div>

            <div className='sm:grid-cols-1 mt-20 container m-auto grid md:grid-cols-1 lg:grid-cols-3 gap-4'>
                <Kutu title={1} link={"https://github.com/alpefe44/filmApp"} baslik={"Film App"} text={"Uygulamam, ana sayfada popüler ve yeni çıkan filmlerin nafişlerini liste şeklinde gösteriyor. Her afişe tıklanarak film detaylarına ulaşılabiliyor. Arama özelliği sayesinde kullanıcılar istedikleri filmi adına göre arayabiliyor, sonuçlar afiş ve başlık şeklinde sunuluyor. Kullanıcılar favori filmlerini işaretleyebilir ve bu filmler ayrı bir bölümde kolayca erişilebilir şekilde listelenir."}></Kutu>
                <Kutu title={2} link={"https://github.com/alpefe44/fitnessApp"} baslik={"Fitness App"} text={"Kullanıcı girişinin FireBase ile yapıldığı ve kullanıcıların belirli kategorilere ayrılmış spor hareketlerinin giflerini ve hedef kas gruplarını görebildiği bir uygulama.Ücretsiz bir API servisi kullanarak geliştirdiğim uygulama da kullanıcı kendi profilindeki fotoğraf,isim gibi yerleri güncelleyebilir ve e-postasını doğrulayabilir"}></Kutu>
                <Kutu title={3} link={"https://github.com/alpefe44/restoranApp"} baslik={"Restoran App"} text={"Restoranları yemek ismi arayarak listeleyebileceğimiz ve fiyat bandında restoranları bölen ve haritadaki konumunu gösteren küçük bir uygulama.Uygulama da yelpApi üzerinden firme bilgilerini çekerek expo-maps kütüphanesi ile haritada ki konumlarını gösterdim."}></Kutu>
            </div>
            <div className='flex flex-col justify-center items-center container m-auto gap-y-5 mt-[200px] border-l-2 border-r-2 px-3'>
                <h1 className='text-5xl font-bold'>Hakkımda</h1>
                <div id='hakkimda' className='border-1 flex justify-between m-auto items-center shadow-l'>
                    <div className='flex flex-col w-[40%]'>
                        <h1 className='font-bold text-xl'>BECERİLER</h1>
                        <div className='px-5 gap-y-2'>
                            <div className='flex flex-col gap-x-6'>
                                <div className='font-bold text-l'>JavaScript </div>
                                <div className='w-[100px] h-[20px] border-2'>
                                    <div className='w-[80px] h-4 bg-green-600 hover:opacity-70 transition-all'></div>
                                </div>
                                <div className='font-bold text-l'>React-Native </div>
                                <div className='w-[100px] h-[20px] border-2'>
                                    <div className='w-[80px] h-4 bg-green-600 hover:opacity-70 transition-all'></div>
                                </div>
                                <div className='font-bold text-l'>Restful API </div>
                                <div className='w-[100px] h-[20px] border-2'>
                                    <div className='w-[60px] h-4 bg-green-600 hover:opacity-70 transition-all'></div>
                                </div>
                                <div className='font-bold text-l'>React </div>
                                <div className='w-[100px] h-[20px] border-2'>
                                    <div className='w-[60px] h-4 bg-green-600 hover:opacity-70 transition-all'></div>
                                </div>
                                <div className='font-bold text-l'>Node JS </div>
                                <div className='w-[100px] h-[20px] border-2'>
                                    <div className='w-[50px] h-4 bg-green-600 hover:opacity-70 transition-all'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%]'>
                        <p className='font-semibold text-xl text-gray-500 '>
                            Bir süredir üzerinde uğraştığım mobil uygulama
                            geliştirme serüvenime React-Native geliştirici olarak
                            devam etmekteyim.Bu alanla ilgilenmek bana eğlenceli
                            geldiği için kendimi bunun üzerine geliştirmeye
                            çalışıyorum ve bundan zevk alıyorum.Ayrıca kendimi web
                            tarafında da React ve tailwind kullanarak geliştirme yapıyorum.
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full h-[50px] flex bg-slate-100 mt-10 '>
                <div className='flex justify-between items-center w-full mx-auto container'>
                    <div className='flex gap-x-8'>
                        <h3 className='font-bold'>Alp Efe Akpınar</h3>
                        <h3 className='font-bold'>2023</h3>
                    </div>
                    <div>
                        <nav className='md:flex items-center gap-x-10'>
                            <a target='_blank' href='https://github.com/alpefe44' className='text-gray-500 text-3xl hover:text-blue-400 hover:opacity-60 transition-all'><AiFillGithub></AiFillGithub></a>
                            <a target='_blank' href='https://www.linkedin.com/in/alpefe/' className='text-gray-500 text-3xl hover:text-blue-400 hover:opacity-60 transition-all'><AiFillLinkedin></AiFillLinkedin></a>
                        </nav>
                    </div>
                </div>
            </div>

        </div>


    )
}
