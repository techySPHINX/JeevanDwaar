import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InteractiveMap } from "@/components/ui/interactive-map";
import {
  MapPin,
  Navigation,
  Users,
  Phone,
  Clock,
  Star,
  Search,
  Route,
  Locate,
  Calendar,
  UserCheck,
  MessageCircle,
  Wallet,
  Target,
  TrendingUp,
  Home,
  Car,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface SHGMitra {
  id: string;
  name: string;
  phone: string;
  shgGroup: string;
  specialization: string[];
  location: {
    address: string;
    latitude: number;
    longitude: number;
    landmark: string;
    pincode: string;
  };
  rating: number;
  experience: string;
  languages: string[];
  availability: string;
  services: string[];
  distance: number;
  profileImage: string;
}

export default function SHGMitrasMap() {
  const { language } = useLanguage();
  const isHindi = language === "hindi";
  const [selectedMitra, setSelectedMitra] = useState<SHGMitra | null>(null);
  const [searchLocation, setSearchLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [mapView, setMapView] = useState<"list" | "map">("list");
  const [filterBy, setFilterBy] = useState<
    "distance" | "rating" | "experience"
  >("distance");
  const [showFullMap, setShowFullMap] = useState(false);

  // Mock SHG Mitras data with location information
  const mockSHGMitras: SHGMitra[] = [
    {
      id: "1",
      name: isHindi ? "सुनीता देवी" : "Sunita Devi",
      phone: "+91 98765-43210",
      shgGroup: isHindi ? "महिला उत्थान समूह" : "Mahila Utthan Group",
      specialization: [
        isHindi ? "जीवन बीमा सलाहकार" : "Life Insurance Advisor",
        isHindi ? "महिला सशक्तिकरण" : "Women Empowerment",
      ],
      location: {
        address: isHindi
          ? "गांव पंचायत भवन, सेक्टर 15, गुड़गांव"
          : "Village Panchayat Bhavan, Sector 15, Gurgaon",
        latitude: 28.4595,
        longitude: 77.0266,
        landmark: isHindi
          ? "गुड़गांव रेलवे स्टेशन के पास"
          : "Near Gurgaon Railway Station",
        pincode: "122001",
      },
      rating: 4.8,
      experience: "5 वर्ष",
      languages: ["हिंदी", "English", "हरियाणवी"],
      availability: isHindi ? "सोम-शनि 9AM-6PM" : "Mon-Sat 9AM-6PM",
      services: [
        isHindi ? "बीमा पॉलिसी सलाह" : "Insurance Policy Advice",
        isHindi ? "क्लेम सहायता" : "Claim Assistance",
        isHindi ? "SHG ऋण सहायता" : "SHG Loan Support",
        isHindi ? "महिला बचत योजना" : "Women Savings Scheme",
      ],
      distance: 1.2,
      profileImage:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    },
    {
      id: "2",
      name: isHindi ? "राधा शर्मा" : "Radha Sharma",
      phone: "+91 87654-32109",
      shgGroup: isHindi ? "स्वावलंबन महिला मंडल" : "Swavalamba Mahila Mandal",
      specialization: [
        isHindi ? "चाइल्ड प्लान एक्सपर्ट" : "Child Plan Expert",
        isHindi ? "वित्तीय साक्षरता" : "Financial Literacy",
      ],
      location: {
        address: isHindi
          ? "कम्युनिटी सेंटर, सेक्टर 22, गुड़गांव"
          : "Community Center, Sector 22, Gurgaon",
        latitude: 28.4743,
        longitude: 77.0848,
        landmark: isHindi ? "IFFCO चौक के पास" : "Near IFFCO Chowk",
        pincode: "122016",
      },
      rating: 4.9,
      experience: "7 वर्ष",
      languages: ["हिंदी", "English", "पंजाबी"],
      availability: isHindi ? "सभी दिन 10AM-7PM" : "All days 10AM-7PM",
      services: [
        isHindi ? "बच्चों की शिक्षा योजना" : "Child Education Planning",
        isHindi ? "पेंशन प्लान सलाह" : "Pension Plan Advice",
        isHindi ? "SHG ग्रुप ट्रेनिंग" : "SHG Group Training",
        isHindi ? "डिजिटल साक्षरता" : "Digital Literacy",
      ],
      distance: 2.8,
      profileImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    },
    {
      id: "3",
      name: isHindi ? "मीरा पटेल" : "Meera Patel",
      phone: "+91 76543-21098",
      shgGroup: isHindi ? "नारी शक्ति संघ" : "Nari Shakti Sangh",
      specialization: [
        isHindi ? "रिटायरमेंट प्लानिंग" : "Retirement Planning",
        isHindi ? "ग्रामीण विकास" : "Rural Development",
      ],
      location: {
        address: isHindi
          ? "ग्राम सेवा केंद्र, सोहना रोड, गुड़गांव"
          : "Gram Seva Kendra, Sohna Road, Gurgaon",
        latitude: 28.3974,
        longitude: 77.0688,
        landmark: isHindi
          ? "सोहना रोड मेट्रो स्टेशन"
          : "Sohna Road Metro Station",
        pincode: "122018",
      },
      rating: 4.7,
      experience: "6 वर्ष",
      languages: ["हिंदी", "गुजराती", "English"],
      availability: isHindi ? "मंगल-रविवार 8AM-5PM" : "Tue-Sun 8AM-5PM",
      services: [
        isHindi ? "हेल्थ इंश्योरेंस सलाह" : "Health Insurance Advice",
        isHindi ? "ग्रामीण बीमा योजना" : "Rural Insurance Schemes",
        isHindi ? "SHG नेतृत्व विकास" : "SHG Leadership Development",
        isHindi ? "माइक्रो फाइनेंस" : "Micro Finance",
      ],
      distance: 4.1,
      profileImage:
        "https://images.unsplash.com/photo-1494790108755-2616734fd35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    },
    {
      id: "4",
      name: isHindi ? "अनीता सिंह" : "Anita Singh",
      phone: "+91 65432-10987",
      shgGroup: isHindi ? "जन कल्याण मंडल" : "Jan Kalyan Mandal",
      specialization: [
        isHindi ? "बिजनेस लोन एडवाइजर" : "Business Loan Advisor",
        isHindi ? "उद्यमिता विकास" : "Entrepreneurship Development",
      ],
      location: {
        address: isHindi
          ? "बिजनेस हब, साइबर सिटी, गुड़गांव"
          : "Business Hub, Cyber City, Gurgaon",
        latitude: 28.4955,
        longitude: 77.091,
        landmark: isHindi
          ? "साइबर सिटी मेट्रो स्टेशन"
          : "Cyber City Metro Station",
        pincode: "122002",
      },
      rating: 4.6,
      experience: "4 वर्ष",
      languages: ["हिंदी", "English", "भोजपुरी"],
      availability: isHindi ? "सोम-शुक्र 9AM-8PM" : "Mon-Fri 9AM-8PM",
      services: [
        isHindi ? "व्यापारिक बीमा योजना" : "Business Insurance Plans",
        isHindi ? "SHG उद्यम सहायता" : "SHG Enterprise Support",
        isHindi ? "लोन प्रोसेसिंग हेल्प" : "Loan Processing Help",
        isHindi ? "बिजनेस प्लान गाइडेंस" : "Business Plan Guidance",
      ],
      distance: 3.5,
      profileImage:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    },
  ];

  const [filteredMitras, setFilteredMitras] =
    useState<SHGMitra[]>(mockSHGMitras);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Error getting location:", error);
          // Default to Gurgaon if location access denied
          setCurrentLocation({ lat: 28.4595, lng: 77.0266 });
        }
      );
    }
  }, []);

  useEffect(() => {
    let sorted = [...mockSHGMitras];

    switch (filterBy) {
      case "distance":
        sorted.sort((a, b) => a.distance - b.distance);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "experience":
        sorted.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
        break;
    }

    if (searchLocation) {
      sorted = sorted.filter(
        (mitra) =>
          mitra.location.address
            .toLowerCase()
            .includes(searchLocation.toLowerCase()) ||
          mitra.location.landmark
            .toLowerCase()
            .includes(searchLocation.toLowerCase()) ||
          mitra.location.pincode.includes(searchLocation)
      );
    }

    setFilteredMitras(sorted);
  }, [filterBy, searchLocation]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const mapMitras = filteredMitras.map((mitra, index) => {
    const baseX = 250;
    const baseY = 200;
    const positions = [
      { x: baseX - 80, y: baseY - 60 }, // Top-left area
      { x: baseX + 90, y: baseY - 40 }, // Top-right area
      { x: baseX - 60, y: baseY + 80 }, // Bottom-left area
      { x: baseX + 70, y: baseY + 60 }, // Bottom-right area
    ];

    return {
      id: mitra.id,
      name: mitra.name,
      position: {
        x: positions[index % positions.length].x,
        y: positions[index % positions.length].y,
        lat: mitra.location.latitude,
        lng: mitra.location.longitude,
      },
      rating: mitra.rating,
      distance: mitra.distance,
      shgGroup: mitra.shgGroup,
      isSelected: selectedMitra?.id === mitra.id,
    };
  });

  const handleMapMitraSelect = (mitraId: string) => {
    const mitra = filteredMitras.find((m) => m.id === mitraId);
    setSelectedMitra(mitra || null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green/5 to-blue/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="mr-4"
            >
              <MapPin className="text-green-600" size={56} />
            </motion.div>
            {isHindi ? "नजदीकी " : "Nearby "}
            <span className="text-blue-500">
              {isHindi ? "SHG मित्र" : "SHG Mitras"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {isHindi
              ? "अपने क्षेत्र में स्वयं सहायता समूह की प्रशिक्षित महिला सलाहकारों से मिलें"
              : "Connect with trained women advisors from Self Help Groups in your area"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="shadow-lg border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <Search className="mr-2" size={24} />
                {isHindi
                  ? "अपने नजदीकी मित्र खोजें"
                  : "Find Your Nearby Mitras"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium">
                    {isHindi ? "स्थान खोजें" : "Search Location"}
                  </Label>
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      size={16}
                    />
                    <Input
                      id="location"
                      placeholder={
                        isHindi
                          ? "एरिया, पिनकोड या लैंडमार्क"
                          : "Area, Pincode or Landmark"
                      }
                      className="pl-10 border-green-300 focus:border-green-500"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    {isHindi ? "फ़िल्टर करें" : "Sort By"}
                  </Label>
                  <div className="flex gap-2">
                    <Button
                      variant={filterBy === "distance" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilterBy("distance")}
                      className="flex-1"
                    >
                      <Navigation className="mr-1" size={14} />
                      {isHindi ? "दूरी" : "Distance"}
                    </Button>
                    <Button
                      variant={filterBy === "rating" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilterBy("rating")}
                      className="flex-1"
                    >
                      <Star className="mr-1" size={14} />
                      {isHindi ? "रेटिंग" : "Rating"}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    {isHindi ? "व्यू मोड" : "View Mode"}
                  </Label>
                  <div className="flex gap-2">
                    <Button
                      variant={mapView === "list" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setMapView("list")}
                      className="flex-1"
                    >
                      <Users className="mr-1" size={14} />
                      {isHindi ? "लिस्ट" : "List"}
                    </Button>
                    <Button
                      variant={mapView === "map" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setMapView("map")}
                      className="flex-1"
                    >
                      <MapPin className="mr-1" size={14} />
                      {isHindi ? "मैप" : "Map"}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-300 hover:bg-green-50"
                >
                  <Locate className="mr-2" size={16} />
                  {isHindi ? "मेरा लोकेशन यूज़ करें" : "Use My Location"}
                </Button>
                <div className="text-sm text-muted-foreground">
                  {filteredMitras.length}{" "}
                  {isHindi ? "मित्र मिले" : "mitras found"}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mitras List */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {filteredMitras.map((mitra) => (
                <motion.div key={mitra.id} variants={itemVariants}>
                  <Card
                    className={`shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                      selectedMitra?.id === mitra.id
                        ? "border-green-300 ring-2 ring-green-200"
                        : "border-green-100"
                    }`}
                    onClick={() => setSelectedMitra(mitra)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <img
                          src={mitra.profileImage}
                          alt={mitra.name}
                          className="w-20 h-20 rounded-full object-cover border-2 border-green-200"
                        />

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-foreground">
                                {mitra.name}
                              </h3>
                              <p className="text-green-600 font-medium">
                                {mitra.shgGroup}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 mb-1">
                                <Star
                                  className="text-yellow-500 fill-current"
                                  size={16}
                                />
                                <span className="font-bold">
                                  {mitra.rating}
                                </span>
                              </div>
                              <Badge
                                variant="outline"
                                className="text-green-600 border-green-300"
                              >
                                {mitra.distance} km
                              </Badge>
                            </div>
                          </div>

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin size={14} className="text-green-600" />
                              <span>{mitra.location.address}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Phone size={14} className="text-blue-600" />
                              <span>{mitra.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock size={14} className="text-orange-600" />
                              <span>{mitra.availability}</span>
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="flex flex-wrap gap-1">
                              {mitra.specialization.map((spec, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs bg-green-100 text-green-800"
                                >
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <Phone className="mr-1" size={14} />
                              {isHindi ? "कॉल करें" : "Call Now"}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-green-300 hover:bg-green-50"
                            >
                              <Route className="mr-1" size={14} />
                              {isHindi ? "दिशा पाएं" : "Get Directions"}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-blue-300 hover:bg-blue-50"
                            >
                              <Calendar className="mr-1" size={14} />
                              {isHindi ? "अपॉइंटमेंट" : "Appointment"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Map and Details Sidebar */}
          <div className="space-y-6">
            {/* Interactive Map Placeholder */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-green-700">
                    <MapPin className="mr-2" size={20} />
                    {isHindi ? "मित्र लोकेशन मैप" : "Mitras Location Map"}
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFullMap(true)}
                    className="border-green-300 hover:bg-green-50"
                  >
                    <Target className="mr-1" size={14} />
                    {isHindi ? "फुल मैप" : "Full Map"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <InteractiveMap
                  mitras={mapMitras}
                  selectedMitra={selectedMitra?.id || null}
                  onMitraSelect={handleMapMitraSelect}
                  currentLocation={currentLocation}
                  isHindi={isHindi}
                />
              </CardContent>
            </Card>

            {/* Selected Mitra Details */}
            {selectedMitra && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="shadow-lg border-green-200">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                    <CardTitle className="text-green-700">
                      {selectedMitra.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {selectedMitra.shgGroup}
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Tabs defaultValue="services" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 bg-green-50">
                        <TabsTrigger
                          value="services"
                          className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                        >
                          {isHindi ? "सेवाएं" : "Services"}
                        </TabsTrigger>
                        <TabsTrigger
                          value="location"
                          className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                        >
                          {isHindi ? "स्थान" : "Location"}
                        </TabsTrigger>
                        <TabsTrigger
                          value="contact"
                          className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                        >
                          {isHindi ? "संपर्क" : "Contact"}
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="services" className="mt-4">
                        <div className="space-y-3">
                          {selectedMitra.services.map((service, index) => (
                            <div
                              key={index}
                              className="flex items-center p-3 bg-green-50 rounded-lg"
                            >
                              <UserCheck
                                className="text-green-600 mr-3 flex-shrink-0"
                                size={16}
                              />
                              <span className="text-sm">{service}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="location" className="mt-4">
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <Home
                              className="text-green-600 mt-1 flex-shrink-0"
                              size={16}
                            />
                            <div>
                              <p className="text-sm font-medium">
                                {selectedMitra.location.address}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {selectedMitra.location.landmark}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="text-blue-600" size={16} />
                            <span className="text-sm">
                              PIN: {selectedMitra.location.pincode}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Car className="text-orange-600" size={16} />
                            <span className="text-sm">
                              {selectedMitra.distance} km away
                            </span>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="contact" className="mt-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Phone className="text-blue-600" size={16} />
                            <span className="text-sm">
                              {selectedMitra.phone}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="text-orange-600" size={16} />
                            <span className="text-sm">
                              {selectedMitra.availability}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {selectedMitra.languages.map((lang, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {lang}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="mt-6 flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        <Phone className="mr-1" size={14} />
                        {isHindi ? "कॉल" : "Call"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-blue-300"
                      >
                        <MessageCircle className="mr-1" size={14} />
                        {isHindi ? "चैट" : "Chat"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Quick Stats */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center">
                  <TrendingUp className="mr-2" size={20} />
                  {isHindi ? "SHG आंकड़े" : "SHG Statistics"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {isHindi ? "कुल मित्र" : "Total Mitras"}
                    </span>
                    <span className="font-bold text-green-600">127+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {isHindi ? "एक्टिव SHG ग्रुप्स" : "Active SHG Groups"}
                    </span>
                    <span className="font-bold text-blue-600">45+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {isHindi ? "कवर्ड एरिया" : "Covered Areas"}
                    </span>
                    <span className="font-bold text-purple-600">25 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {isHindi ? "औसत रेटिंग" : "Average Rating"}
                    </span>
                    <span className="font-bold text-yellow-600">4.8 ⭐</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="shadow-lg border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {isHindi
                  ? "SHG मित्र बनना चाहते हैं?"
                  : "Want to Become an SHG Mitra?"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {isHindi
                  ? "अपने समुदाय की महिलाओं की मदद करें और अतिरिक्त आय प्राप्त करें। SBL लाइफ के साथ जुड़ें।"
                  : "Help women in your community and earn additional income. Join SBI Life as a trained advisor."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Users className="mr-2" size={20} />
                  {isHindi
                    ? "मित्र बनने के लिए अप्लाई करें"
                    : "Apply to Become Mitra"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-300 hover:bg-green-50"
                >
                  <Wallet className="mr-2" size={20} />
                  {isHindi ? "कमाई की जानकारी" : "Earning Information"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Full Screen Map Modal */}
        {showFullMap && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full h-full max-w-6xl max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-bold text-green-700">
                  {isHindi
                    ? "पूर्ण मैप व्यू - SHG मित्र लोकेशन"
                    : "Full Map View - SHG Mitras Location"}
                </h2>
                <Button
                  variant="outline"
                  onClick={() => setShowFullMap(false)}
                  className="border-red-300 hover:bg-red-50"
                >
                  ✕ {isHindi ? "बंद करें" : "Close"}
                </Button>
              </div>
              <div className="p-4 h-full">
                <div style={{ height: "calc(100% - 2rem)" }}>
                  <InteractiveMap
                    mitras={mapMitras}
                    selectedMitra={selectedMitra?.id || null}
                    onMitraSelect={handleMapMitraSelect}
                    currentLocation={currentLocation}
                    isHindi={isHindi}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
