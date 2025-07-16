// app/services/page.jsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import Link from "next/link";
import {
  Car,
  Settings,
  Wrench,
  Gauge,
  Battery,
  Thermometer,
  Shield,
  CheckCircle,
  Clock,
  Euro,
  Phone,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "diagnostics",
      icon: Gauge,
      title: "Számítógépes diagnosztika",
      description:
        "Modern diagnosztikai berendezésekkel felderítjük járműve rejtett hibáit.",
      features: [
        "OBD hibakód olvasás",
        "Élő paraméter vizsgálat",
        "Részletes hibaanalízis",
        "Elektronikus rendszerek tesztelése",
      ],
      price: "8 000 Ft‑tól",
      duration: "30‑60 perc",
      category: "Diagnosztika",
    },
    {
      id: "engine",
      icon: Car,
      title: "Motorjavítás és karbantartás",
      description:
        "Teljes körű motorjavítási szolgáltatások minden típusú járműhöz.",
      features: [
        "Motorfelújítás",
        "Hengerfej javítás",
        "Timing szíj csere",
        "Olaj‑ és szűrőcsere",
      ],
      price: "15 000 Ft‑tól",
      duration: "2‑8 óra",
      category: "Motor",
    },
    {
      id: "brakes",
      icon: Shield,
      title: "Fékrendszer javítás",
      description:
        "Biztonságos közlekedésért – fékek szakszerű karbantartása és javítása.",
      features: [
        "Fékbetét csere",
        "Féktárcsa esztergálás",
        "Fékfolyadék csere",
        "Fékrendszer légtelenítés",
      ],
      price: "12 000 Ft‑tól",
      duration: "1‑3 óra",
      category: "Biztonság",
    },
    {
      id: "electrical",
      icon: Battery,
      title: "Elektromos rendszerek",
      description: "Elektromos hibák diagnosztizálása és javítása.",
      features: [
        "Akkumulátor teszt",
        "Generátor javítás",
        "Indítómotor felújítás",
        "Kábelköteg javítás",
      ],
      price: "10 000 Ft‑tól",
      duration: "1‑4 óra",
      category: "Elektromos",
    },
    {
      id: "suspension",
      icon: Settings,
      title: "Futómű és kormányrendszer",
      description: "Kényelmes és biztonságos vezetés érdekében.",
      features: [
        "Lengéscsillapító csere",
        "Kormányösszekötő javítás",
        "Keréktárcsa javítás",
        "Kerékcsapágy csere",
      ],
      price: "18 000 Ft‑tól",
      duration: "2‑5 óra",
      category: "Futómű",
    },
    {
      id: "cooling",
      icon: Thermometer,
      title: "Hűtőrendszer karbantartás",
      description: "Motor hűtési rendszerének hatékony működése.",
      features: [
        "Hűtőfolyadék csere",
        "Radiátor tisztítás",
        "Termosztát csere",
        "Vízpumpa javítás",
      ],
      price: "8 000 Ft‑tól",
      duration: "1‑3 óra",
      category: "Hűtés",
    },
    {
      id: "maintenance",
      icon: Wrench,
      title: "Rendszeres karbantartás",
      description:
        "Megelőző karbantartással hosszabbítsa meg autója élettartamát.",
      features: [
        "Nagyszerviz",
        "Kisszerviz",
        "Szűrőcsere",
        "Folyadékszintek ellenőrzése",
      ],
      price: "25 000 Ft‑tól",
      duration: "2‑4 óra",
      category: "Karbantartás",
    },
    {
      id: "inspection",
      icon: CheckCircle,
      title: "Műszaki vizsga előkészítés",
      description:
        "Biztos műszaki vizsga – felkészítjük autóját a sikeres vizsgához.",
      features: [
        "Teljes átvizsgálás",
        "Hibák javítása",
        "Dokumentumok rendezése",
        "Vizsga lebonyolítás",
      ],
      price: "15 000 Ft‑tól",
      duration: "1‑2 óra",
      category: "Műszaki",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mt-12 text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Szolgáltatásaink
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Teljes körű autójavítási és karbantartási szolgáltatások
            professzionális kivitelezésben. Modern eszközökkel és tapasztalt
            szakemberekkel.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="text-orange-500 border border-gray-100 shadow-sm hover:shadow-lg transition group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <Badge className="text-xs bg-gray-200 text-gray-800">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600">{service.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-900">
                      Szolgáltatás elemei:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Euro className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-primary">
                          {service.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Szüksége van segítségre?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Foglaljon időpontot online, vagy lépjen kapcsolatba velünk
              személyesen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 text-white hover:bg-orange-600">
                <Link href="/booking">Időpont foglalása</Link>
              </Button>
              <Button className="bg-black/80 text-white hover:bg-black px-8 py-3 border border-black/20">
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Kapcsolatfelvétel
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
