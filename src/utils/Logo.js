// components/Logo.jsx
export const Logo = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="flex flex-col items-center">
        {/* House icon */}
        <div className="relative w-12 h-8 mb-1">
          <div className="absolute w-12 h-6 bg-gfc-black bottom-0"></div>
          <div className="absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[16px] border-transparent border-b-gfc-black left-1/2 -translate-x-1/2 -top-2"></div>
          <div className="absolute w-10 h-6 border-2 border-gfc-gold bottom-0 left-1/2 -translate-x-1/2"></div>
          <div className="absolute w-0 h-0 border-l-[18px] border-r-[18px] border-b-[14px] border-transparent border-b-gfc-gold left-1/2 -translate-x-1/2 -top-1.5"></div>
        </div>

        {/* GFC Text */}
        <div className="flex items-center relative mb-3">
          <span className="text-5xl font-extrabold tracking-tighter text-gfc-black">
            <span className="relative">
              G<span className="absolute inset-0 text-transparent -m-[2px] stroke-gfc-gold">G</span>
            </span>
            <span className="relative">
              F<span className="absolute inset-0 text-transparent -m-[2px] stroke-gfc-gold">F</span>
            </span>
            <span className="relative">
              C<span className="absolute inset-0 text-transparent -m-[2px] stroke-gfc-gold">C</span>
            </span>
          </span>
        </div>

        {/* Divider line */}
        <div className="h-3 w-full bg-gfc-black mt-1 relative">
          <div className="h-0.5 w-full absolute -top-0.5 bg-gfc-gold"></div>
        </div>
        {/* Exteriors text */}
        <div className="mt-2 text-sm font-semibold tracking-wider text-gfc-black">
          Exteriors LLC
        </div>

        {/* Bottom accent lines */}
        <div className="flex items-center justify-center w-full mt-1 space-x-2">
          <div className="h-0.5 w-12 bg-gfc-gold"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-gfc-gold"></div>
          <div className="h-0.5 w-12 bg-gfc-gold"></div>
        </div>
      </div>
    </div>
  )
}

export default Logo
