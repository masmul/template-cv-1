import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-[2fr,3fr] gap-8">
          {/* Left Column */}
          <div className="bg-pink-100 p-8">
            <div className="mb-8">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                <img
                  src="images/foto.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">Adhisty Zara</h1>
              <h2 className="text-xl text-gray-600 text-center">DESAINER GRAFIS</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">KONTAK</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>+123-456-7890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>hello@reallygreatsite.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span>123 Anywhere St., Any City</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">KEAHLIAN</h3>
                <ul className="space-y-2">
                  <li>• Desain Identitas Merek</li>
                  <li>• Ilustrasi Digital</li>
                  <li>• Desain Web Responsif</li>
                  <li>• Tipografi</li>
                  <li>• Pengembangan Kreatif Konsep</li>
                  <li>• Kolaborasi Tim</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-8">
            <div className="prose max-w-none mb-8">
              <p className="text-gray-600">
                Seorang desainer grafis berbakat dengan kreativitas yang tak terbatas. 
                Dengan pengalaman yang solid dalam industri, saya berdedikasi untuk 
                menghadirkan desain yang memukau dan memikat untuk klien-klien saya. 
                Saya percaya bahwa setiap proyek adalah kesempatan untuk menginspirasi 
                dan mengkomunikasikan cerita melalui estetika visual yang unik dan berani.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 bg-pink-100 inline-block px-6 py-2 rounded-full">
                PENDIDIKAN
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">Universitas Indonesia</h4>
                    <span className="text-gray-600">2010</span>
                  </div>
                  <p className="font-medium">Program Pelatihan Desain Kreatif</p>
                  <p className="text-gray-600">
                    Mempelajari dasar-dasar desain kreatif untuk mengembangkan keterampilan                       visual dan kreativitas
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">Institut Teknologi Bandung (ITB)
</h4>
                    <span className="text-gray-600">2015</span>
                  </div>
                  <p className="font-medium">Sarjana Desain Grafis</p>
                  <p className="text-gray-600">
                    Menyelesaikan studi di bidang desain grafis dengan fokus pada pengembangan konsep desain, tipografi, dan desain digital.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 bg-pink-100 inline-block px-6 py-2 rounded-full">
                PENGALAMAN
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">Ingoude Company</h4>
                    <span className="text-gray-600">2016 - 2019</span>
                  </div>
                  <p className="font-medium">Desainer Grafis Senior</p>
                  <p className="text-gray-600">
                    Mengelola berbagai proyek desain visual untuk klien perusahaan
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">Ingoude Company</h4>
                    <span className="text-gray-600">2019 - 2023</span>
                  </div>
                  <p className="font-medium">Freelance Desainer Grafis</p>
                  <p className="text-gray-600">
                    Memimpin tim kecil untuk menciptakan identitas merek dan materi promosi.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">Ingoude Company</h4>
                    <span className="text-gray-600">2023 - Sekarang</span>
                  </div>
                  <p className="font-medium">Instruktur Desain Grafis</p>
                  <p className="text-gray-600">
                    Meningkatkan kualitas desain dengan teknik terbaru dan pendekatan kreatif
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
