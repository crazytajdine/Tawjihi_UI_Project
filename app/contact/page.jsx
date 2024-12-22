
import {NavFooter} from "../NavFooter";
import {NavUpperbarre} from "../NavUpperbarre";
import ContactUs from "./components/ContactUs";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Header */}
      <NavUpperbarre />

      {/* Main Content */}
      <div className="flex-grow">
        <ContactUs />
      </div>

      {/* Footer */}
      <NavFooter />
    </div>
  );
}
