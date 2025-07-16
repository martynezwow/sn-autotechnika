import { Wrench, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-orange-500" />
              <span className="text-white text-xl font-bold">SN Autotechnika Kft.</span>
            </div>
            <p className="text-stone-300 mb-4">
              Precíz autójavítás és karbantartás több mint 10 éves tapasztalattal. 
              Megbízható szolgáltatások minden típusú járműhöz.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-stone-300">
                <Phone className="h-4 w-4 text-accent text-orange-500" />
                <span>+36 30 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-300">
                <Mail className="h-4 w-4 text-accent text-orange-500" />
                <span>info@snautotechnika.hu</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent text-orange-500">Elérhetőség</h3>
            <div className="space-y-3 text-stone-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0 text-orange-500" />
                <span>1234 Budapest, Példa utca 12.</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-accent mt-1 flex-shrink-0 text-orange-500" />
                <div>
                  <div>H-P: 08:00 - 16:00</div>
                  <div>Szombat-Vasárnap: Zárva</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-grey-700 mt-8 pt-8 text-center text-stone-300">
          <p>&copy; 2025 SN Autotechnika Kft. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
}