import { useState, useRef, useEffect } from "react";

export default function TokenSelectDropdown({ tokens, onChange }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(tokens[0]);
  const dropdownRef = useRef(null);

  const handleSelect = (token) => {
    setSelected(token);
    setOpen(false);
    onChange?.(token);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-[100%]" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full border border-[rgba(255, 255, 255, 0.20)] px-2 h-[48px] rounded-[8px] cursor-pointer"
        style={{ background: "rgba(255, 255, 255, 0.10)" }}
      >
        <span className="flex items-center gap-2 text-[11.7px] font-[700] font-[Inter]">
          <div className="min-w-[20px]">
            {selected.icon && (
              <img
                src={selected.icon}
                alt={selected.symbol}
                className="w-5 h-5"
              />
            )}
          </div>
          <span
            className={`leading-[10px] text-start ${
              selected.symbol === "More"
                ? "text-[#fff] text-[14px] "
                : "text-[#fff] text-[11.7px]"
            }`}
          >
            {selected.symbol}
            <br />
            {selected.sub_symbol && (
              <span className="text-[9px] leading-[8px] font-[400]">
                {selected.sub_symbol}
              </span>
            )}
          </span>
        </span>
        <svg
          className={`w-4 h-4 text-[#fff] transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div
          className="absolute left-0 z-10 w-full mt-1 overflow-hidden border border-gray-300 rounded-md shadow-md"
          style={{
            background: "rgba(54, 54, 54, 0)",
            backdropFilter: "blur(5px)",
          }}
        >
          {tokens.map((token) => (
            <button
              key={token.id}
              onClick={() => handleSelect(token)}
              className="flex items-center gap-2 w-full px-3 py-2 text-[11.7px] font-[700] font-[Inter] text-left hover:bg-gray-100/80"
              style={{
                background: "rgba(201, 187, 187, 0.47)",
              }}
            >
              {token.icon && (
                <img src={token.icon} alt={token.symbol} className="w-5 h-5" />
              )}
              {token.symbol}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
