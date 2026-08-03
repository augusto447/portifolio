import { Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FramerEmotion } from "./framermotion";

export function Contact() {
  return (
    <FramerEmotion id="contact" className="px-5 md:px-10 py-5 scroll-mt-24">
      <h2 className="text-center text-4xl  font-bold text-white tracking-tight">
        Entre em contacto
      </h2>

      <div className="mt-4 flex justify-center">
        <span className="text-gray-400 text-sm md:text-base text-center max-w-xl border-b border-red-500 pb-1">
          Vamos trabalhar juntos no próximo Projecto
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-14 gap-4 ">
        {}
        <a
          target="_blank"
          href="https://github.com/augusto447"
          rel="noopener noreferrer"
        >
          <Card
            className=" bg-black border border-gray-800 
              hover:border-red-500/60 
              transition-all duration-300
              hover:-translate-y-1"
          >
            <CardHeader>
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center 
                    rounded-xl bg-red-500/10 border border-red-500/20"
                >
                  <FaGithub className="h-6 w-6 text-red-500" />
                </div>
                <span>
                  <CardTitle className="text-white text-sm">GitHub</CardTitle>
                  <h1 className="text-gray-400">augusto447</h1>
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription></CardDescription>
            </CardContent>
          </Card>
        </a>

        <a href="mailto:augusto11swat@gmail.com">
          <Card
            className=" bg-black border border-gray-800 
              hover:border-red-500/60 
              transition-all duration-300
              hover:-translate-y-1"
          >
            <CardHeader>
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center 
                    rounded-xl bg-red-500/10 border border-red-500/20"
                >
                  <Mail className="h-6 w-6 text-red-500" />
                </div>
                <span>
                  <CardTitle className="text-white text-sm">Email</CardTitle>
                  <h1 className="text-gray-400">augusto11swat@gmail.com</h1>
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription></CardDescription>
            </CardContent>
          </Card>
        </a>

        <a
          href="www.linkedin.com/in/augusto-manuel-76ab91248"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            className=" bg-black border border-gray-800 
              hover:border-red-500/60 
              transition-all duration-300
              hover:-translate-y-1"
          >
            <CardHeader>
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center 
                    rounded-xl bg-red-500/10 border border-red-500/20"
                >
                  <FaLinkedin className="h-6 w-6 text-red-500" />
                </div>
                <span>
                  <CardTitle className="text-white text-sm">Linkdlin</CardTitle>
                  <h1 className="text-gray-400"> Augusto Manuel</h1>
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription></CardDescription>
            </CardContent>
          </Card>
        </a>
        <a
          target="_blank"
          href="https://wa.me/244928555703"
          rel="noopener noreferrer"
        >
          <Card
            className=" bg-black border border-gray-800 
              hover:border-red-500/60 
              transition-all duration-300
              hover:-translate-y-1"
          >
            <CardHeader>
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center 
                    rounded-xl bg-red-500/10 border border-red-500/20"
                >
                  <FaWhatsapp className="h-6 w-6 text-green-500" />
                </div>
                <span>
                  <CardTitle className="text-white text-sm">WhatsApp</CardTitle>
                  <h1 className="text-gray-400">+244 928555703</h1>
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription></CardDescription>
            </CardContent>
          </Card>
        </a>
      </div>
    </FramerEmotion>
  );
}
