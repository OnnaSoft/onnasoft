import { useRef, useState } from "react";
import { Building, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formMessage, setFormMessage] = useState<{
    type: "success" | "error";
    content: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (data: ContactFormData): FormErrors => {
    const errors: FormErrors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    } else if (data.name.length < 2) {
      errors.name = "Name must be at least 2 characters long";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Email is not valid";
    }

    if (!data.message.trim()) {
      errors.message = "Message is required";
    } else if (data.message.length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }

    return errors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const contactData: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const formErrors = validateForm(contactData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormMessage({ type: "success", content: data.message });
        formRef.current?.reset();
      } else {
        setFormMessage({
          type: "error",
          content:
            data.message ||
            "There was an error sending your message. Please try again later.",
        });
      }
    } catch (error) {
      setFormMessage({
        type: "error",
        content:
          "There was an error sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Contact OnnaSoft, Inc.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
              Contact Information
            </h3>
            <div className="space-y-6">
              <p className="flex items-center text-lg text-gray-700 dark:text-gray-300">
                <Building className="h-6 w-6 text-red-500 dark:text-red-400 mr-3" />
                <span>OnnaSoft, Inc. - Delaware C Corporation</span>
              </p>
              <p className="flex items-center text-lg text-gray-700 dark:text-gray-300">
                <Mail className="h-6 w-6 text-red-500 dark:text-red-400 mr-3" />
                <span>Representative: Julio Cesar Jr Torres Moreno</span>
              </p>
              <p className="flex items-center text-lg text-gray-700 dark:text-gray-300">
                <Phone className="h-6 w-6 text-red-500 dark:text-red-400 mr-3" />
                <span>+1 (206) 649-8382</span>
              </p>
              <p className="flex items-center text-lg text-gray-700 dark:text-gray-300">
                <MapPin className="h-6 w-6 text-red-500 dark:text-red-400 mr-3" />
                <span>2261 Market Street, San Francisco, CA 94114 US</span>
              </p>
            </div>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md space-y-6"
          >
            <div>
              <Input
                name="name"
                placeholder="Name"
                required
                className="text-lg bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="text-lg bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Message"
                required
                className="text-lg bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-xl bg-red-500 hover:bg-red-600 text-white py-4"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            {formMessage && (
              <p
                className={
                  formMessage.type === "success"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }
              >
                {formMessage.content}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
