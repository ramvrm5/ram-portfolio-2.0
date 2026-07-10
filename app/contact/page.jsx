"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const [service, setService] = useState("");
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus({
        type: "error",
        message: "Contact form is not configured yet.",
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("botcheck")) {
      return;
    }

    if (!service) {
      setStatus({
        type: "error",
        message: "Please choose a service.",
      });
      return;
    }

    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const message = formData.get("message");

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New message from Ram Verma portfolio",
          from_name: "Ram Verma Portfolio",
          name: `${firstname} ${lastname}`,
          firstname,
          lastname,
          email,
          replyto: email,
          service,
          message,
          botcheck: formData.get("botcheck") || "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thanks! Your message has been sent successfully.",
        });
        form.reset();
        setService("");
      } else {
        setStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Unable to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              <div>
                <h2 className="h2 mb-6">
                  Get In <span className="text-accent">Touch</span>
                </h2>
                <p className="max-w-[460px]">
                  Have a project, collaboration, or opportunity in mind? Send me
                  a message and I will get back to you soon.
                </p>
              </div>

              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+91 - 98 96 07 95 03</span>
                </div>

                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>ramvrm5@gmail.com</span>
                </div>

                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMapPin className="text-2xl" />
                  </span>
                  <span>SAS Mohali, Chandigarh, India</span>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-start"
              >
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="firstname">
                      Firstname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      placeholder="First name"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <Label htmlFor="lastname">
                      Lastname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div className="w-full">
                  <Label htmlFor="email">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="youremail@gmail.com"
                    required
                  />
                </div>

                <div className="w-full">
                  <Label htmlFor="service">
                    I'm interested in <span className="text-accent">*</span>
                  </Label>
                  <Select
                    name="service"
                    value={service}
                    onValueChange={setService}
                    required
                  >
                    <SelectTrigger
                      id="service"
                      className="w-full !h-12 bg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="Website Design & Development">
                        Website Design & Development
                      </SelectItem>
                      <SelectItem value="Full Stack Development">
                        Full Stack Development
                      </SelectItem>
                      <SelectItem value="Frontend Development">
                        Frontend Development
                      </SelectItem>
                      <SelectItem value="Backend Development">
                        Backend Development
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full">
                  <Label htmlFor="message">
                    Message <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    required
                    className="min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                  />
                </div>

                {status.message && (
                  <p
                    className={`text-sm ${
                      status.type === "success"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {status.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-lg btn-accent disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium">
                      {isSubmitting ? "Sending..." : "Send message"}
                    </span>
                    <HiOutlineArrowLongRight className="text-xl" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;