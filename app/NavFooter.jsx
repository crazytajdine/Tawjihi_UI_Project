import Link from "next/link";

export const NavFooter = () => {
  return (
    <div className="flex h-[357px] items-start justify-between p-10 relative w-full bg-black ">
      <Link
        href={"/"}
        className="inline-flex items-center justify-center gap-[5.62px] p-[5.62px] relative flex-[0_0_auto]"
      >
        <div className="relative w-fit mt-[-0.56px] [font-family:'Preahvihear-Regular',Helvetica] font-normal text-collection-1-white text-[20.2px] tracking-[0] leading-[normal]">
          AFTERBAC
        </div>
      </Link>

      <div className="flex flex-col w-[218.25px] items-start justify-center gap-[6.19px] relative">
        <Link
          href={"/GetStarted"}
          className="flex items-center gap-[5.62px] p-[5.62px] relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="relative w-fit mt-[-0.56px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-white text-[22.5px] tracking-[0] leading-[normal] whitespace-nowrap">
            Get starded
          </div>
        </Link>

        <Link
          href={"/webinaire"}
          className="flex items-center gap-[5.62px] p-[5.62px] relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="relative w-fit mt-[-0.56px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-white text-[22.5px] tracking-[0] leading-[normal] whitespace-nowrap">
            Webinaire
          </div>
        </Link>

        <Link
          href={"/terms"}
          className="flex items-center gap-[5.62px] p-[5.62px] relative self-stretch w-full flex-[0_0_auto]"
        >
          <div
            className="relative w-fit mt-[-0.56px] mr-[-1.00px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-white text-[22.5px] tracking-[0] leading-[normal] whitespace-nowrap"
            rel="noopener noreferrer"
          >
            Terms and conditions
          </div>
        </Link>

        <Link
          href={"/blog"}
          className="items-center gap-[5.62px] p-[5.62px] self-stretch w-full flex relative flex-[0_0_auto]"
        >
          <div className="relative w-fit mt-[-0.56px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-white text-[22.5px] tracking-[0] leading-[normal] whitespace-nowrap">
            blogs
          </div>
        </Link>
      </div>

      <div className="inline-flex flex-col items-start gap-[10.12px] relative flex-[0_0_auto]">
        <Link
          href={"/account"}
          className="relative self-stretch mt-[-0.56px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-white text-[22.5px] tracking-[0] leading-[normal]"
        >
          Account
        </Link>

        <Link
          href={"/notifications"}
          className="relative self-stretch [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-white text-[22.5px] tracking-[0] leading-[normal]"
        >
          Notification
        </Link>

        <Link
          href={"/contact"}
          className="relative self-stretch [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-white text-[22.5px] tracking-[0] leading-[normal]"
        >
          Support
        </Link>
      </div>

      <form className="flex flex-col w-[270.56px] items-start gap-[12.94px] relative mb-[-16.44px]">
        <p className="relative self-stretch mt-[-0.56px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-white text-[20.2px] tracking-[0] leading-[normal]">
          Abonnez-vous à notre newsletter pour être informé(e) des évènements à
          venir !
        </p>

        <div className="flex-col w-[167.62px] items-start gap-[9px] flex relative flex-[0_0_auto]">
          <label
            htmlFor="prenomInput"
            className="relative self-stretch mt-[-0.56px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-white text-[20.2px] tracking-[0] leading-[normal]"
          >
            <span className="text-white">Prénom </span>

            <span className="text-[#facc73]">*</span>
          </label>

          <input
            id="prenomInput"
            className="relative p-px self-stretch w-full h-[28.69px] bg-collection-1-white rounded-[6.75px]"
          />
        </div>

        <div className="flex flex-col w-[167.62px] items-start gap-[9px] relative flex-[0_0_auto]">
          <label
            htmlFor="emailInput"
            className="relative self-stretch mt-[-0.56px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-collection-1-white text-[20.2px] tracking-[0] leading-[normal]"
          >
            <span className="text-white">Email </span>

            <span className="text-[#facc73]">*</span>
          </label>

          <input
            id="emailInput"
            className="relative p-px self-stretch w-full h-[28.69px] bg-collection-1-white rounded-[6.75px]"
          />
        </div>

        <button
          type="submit"
          className="flex w-[70.31px] items-center justify-center gap-[5.62px] p-[5.62px] relative flex-[0_0_auto] bg-collection-1-main rounded-[5.62px] overflow-hidden"
        >
          <div className="relative flex-1 mt-[-0.56px] [font-family:'Inria_Sans-Regular',Helvetica] font-normal text-m-3black text-[20.2px] tracking-[0] leading-[normal]">
            valider
          </div>
        </button>
      </form>
    </div>
  );
};
