import React from 'react'
import Navbar from '../components/Navbar'
import Kutu from '../components/Kutu'

export default function HomeScreen() {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar></Navbar>
            <div className='h-[100px]'></div>
            <div className='flex justify-center items-center'>
                <h1 className='font-bold text-5xl text-black shadow-sm'>Projeler</h1>
            </div>

            <div className='sm:grid-cols-1 mt-20 container m-auto grid md:grid-cols-3 gap-4 w-screen'>
                <Kutu title={1} link={"https://github.com/alpefe44/filmApp"} baslik={"Film App"} text={"Uygulamam, ana sayfada popüler ve yeni çıkan filmlerin nafişlerini liste şeklinde gösteriyor. Her afişe tıklanarak film detaylarına ulaşılabiliyor. Arama özelliği sayesinde kullanıcılar istedikleri filmi adına göre arayabiliyor, sonuçlar afiş ve başlık şeklinde sunuluyor. Kullanıcılar favori filmlerini işaretleyebilir ve bu filmler ayrı bir bölümde kolayca erişilebilir şekilde listelenir."}></Kutu>
                <Kutu title={2} link={"https://github.com/alpefe44/fitnessApp"} baslik={"Fitness App"} text={"Kullanıcı girişinin FireBase ile yapıldığı ve kullanıcıların belirli kategorilere ayrılmış spor hareketlerinin giflerini ve hedef kas gruplarını görebildiği bir uygulama.Ücretsiz bir API servisi kullanarak geliştirdiğim uygulama da kullanıcı kendi profilindeki fotoğraf,isim gibi yerleri güncelleyebilir ve e-postasını doğrulayabilir"}></Kutu>
                <Kutu title={3} link={"https://github.com/alpefe44/restoranApp"} baslik={"Restoran App"} text={"Restoranları yemek ismi arayarak listeleyebileceğimiz ve fiyat bandında restoranları bölen ve haritadaki konumunu gösteren küçük bir uygulama.Uygulama da yelpApi üzerinden firme bilgilerini çekerek expo-maps kütüphanesi ile haritada ki konumlarını gösterdim."}></Kutu>
            </div>

            <div className='flex flex-col justify-center items-center container m-auto mt-[100px] gap-y-5'>
                <h1 className='text-5xl font-bold'>Hakkımda</h1>
                <div className='border-1 flex justify-between m-auto items-center shadow-l'>
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

            <div className='container m-auto'>
                
            </div>

        </div>
    )
}
