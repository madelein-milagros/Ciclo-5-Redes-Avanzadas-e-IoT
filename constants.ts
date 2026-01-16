
import { Course } from './types';

const DEFAULT_VIDEO = "https://youtu.be/dQw4w9WgXcQ?si=YHkLxdTjHQ-IzVrd";

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Programación para dispositivos IoT",
    officialName: "Tecsup – Introducción al Internet de las Cosas y Transformación Digital + Exploración de IoT con Cisco Packet Tracer",
    description: "Fundamentos del IoT, sensores, actuadores, comunicación M2M, integración con redes IP y simulación en Packet Tracer.",
    certification: "Cisco Networking Academy – Introduction to IoT + Exploring IoT with Packet Tracer",
    videoUrl: DEFAULT_VIDEO,
    links: [
      { label: "Ver curso oficial (Intro IoT)", url: "https://www.netacad.com/courses/introduction-iot?courseLang=es-XL&instance_id=59af6dee-7e65-4ae0-8fce-e2ae5e0a53eb" },
      { label: "Ver curso oficial (Packet Tracer)", url: "https://www.netacad.com/courses/exploring-iot-cisco-packet-tracer?courseLang=es-XL&instance_id=7f399b76-2a0c-4e1c-bea7-7010a0a36e84" }
    ]
  },
  {
    id: 2,
    title: "Tecnología de acceso a redes",
    officialName: "Tecsup – Fundamentos de Ciberseguridad",
    description: "Amenazas modernas, defensa perimetral, políticas de seguridad y criptografía aplicada.",
    certification: "Cisco Networking Academy – Cybersecurity Essentials",
    videoUrl: DEFAULT_VIDEO,
    links: [
      { label: "Ver curso oficial", url: "https://www.netacad.com/es/courses/cybersecurity-essentials?courseLang=es-XL&instance_id=46ebc9aa-bbd9-4867-b27d-5cfaa18f9bfa" }
    ]
  },
  {
    id: 3,
    title: "Seguridad Perimetral",
    officialName: "Fortinet NSE Training – Introduction to the Threat Landscape, Getting Started in Cybersecurity, Technical Introduction",
    description: "Panorama de amenazas cibernéticas, vectores de ataque y defensa en capas.",
    certification: "Fortinet NSE 1 – Network Security Associate",
    videoUrl: DEFAULT_VIDEO,
    links: [
      { label: "Ver curso oficial (Threat Landscape)", url: "https://training.fortinet.com/local/staticpage/view.php?page=library_introduction-to-the-threat-landscape" },
      { label: "Ver curso oficial (Getting Started)", url: "https://training.fortinet.com/local/staticpage/view.php?page=library_getting-started-in-cybersecurity" },
      { label: "Ver curso oficial (Technical Intro)", url: "https://training.fortinet.com/local/staticpage/view.php?page=library_technical-introduction-to-cybersecurity" }
    ]
  },
  {
    id: 4,
    title: "Administración de sistemas operativos avanzados",
    officialName: "Administración Avanzada de Sistemas Operativos",
    description: "Gestión avanzada de usuarios, servicios (SSH, DNS, DHCP), virtualización ligera y monitoreo.",
    certification: "LPIC-1 o Microsoft MD-102",
    videoUrl: DEFAULT_VIDEO,
    links: []
  },
  {
    id: 5,
    title: "Redes Convergentes",
    officialName: "Sangoma – PBXact Essentials",
    description: "Telefonía IP (VoIP), protocolos SIP/RTP, integración de voz, video y datos en redes convergentes.",
    certification: "Sangoma Certified Professional – PBXact Essentials",
    videoUrl: DEFAULT_VIDEO,
    links: [
      { label: "Ver curso oficial", url: "https://training.sangoma.com/course/view.php?id=2" }
    ]
  }
];

export const CHECKPOINT_TEXT = "Diseña e implementa una red convergente con servicios de voz (VoIP), dispositivos IoT simulados, políticas de seguridad perimetral y monitoreo centralizado.";
