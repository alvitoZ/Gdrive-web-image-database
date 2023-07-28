import React, { useState } from "react";
import { api } from "@/utils/api";
import { data } from "types/data";
import { is_valid_google_drive_link } from "@/utils/gDriveValidate";

type Data = Omit<data, "downloadUrl" | "_id">;

type disabled = {
  bool: boolean;
};

const Form = () => {
  const [dataNya, setDatanya] = useState<Data>({
    src: "",
    alt: "",
    name: "",
    desc: "",
  });

  const [disabled, setDisabled] = useState<disabled>({
    bool: false,
  });

  const send = (e: any) => {
    if (!is_valid_google_drive_link(dataNya.src)) {
      alert("kudu masukin link gdrive");
      e.preventDefault();
    } else {
      api.post("/api/server", dataNya).catch((err) => {
        console.log(err);
      });
      setDisabled({
        bool: !disabled.bool,
      });
      setTimeout(() => {
        setDisabled({
          bool: disabled.bool,
        });
      }, 5000);
    }
  };

  return (
    <div className="flex justify-between flex-col items-start border-b border-teal-500 py-2">
      <form method="post" onSubmit={(e) => send(e)}>
        <div className="p-6">
          <p>wajib masukin link gdrive image</p>
          <input
            className="appearance-none bg-pink-300 border-none w-full text-red-600 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            required
            name="src"
            placeholder="your image Gdrive link"
            onChange={(e) =>
              setDatanya({
                ...dataNya,
                src: e.target.value,
              })
            }
          />
        </div>
        <input
          className="appearance-none bg-yellow-300 border-none w-full text-red-600 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          required
          name="alt"
          placeholder="your image alt"
          onChange={(e) =>
            setDatanya({
              ...dataNya,
              alt: e.target.value,
            })
          }
        />
        <input
          className="appearance-none bg-blue-700 border-none w-full text-red-600 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          required
          name="name"
          placeholder="name"
          maxLength={20}
          onChange={(e) =>
            setDatanya({
              ...dataNya,
              name: e.target.value,
            })
          }
        />
        <input
          className="appearance-none bg-red-600 border-none w-full text-yellow-600 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          required
          name="desc"
          placeholder="deskripsi"
          maxLength={30}
          onChange={(e) =>
            setDatanya({
              ...dataNya,
              desc: e.target.value,
            })
          }
        />
        <button
          className="flex-shrink-0 bg-green-400 hover:bg-teal-400  hover:border-teal-400 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
          disabled={disabled.bool}
        >
          upload
        </button>
        <p>{disabled.bool ? "wait tod...." : "klik untuk upload"}</p>
      </form>
    </div>
  );
};

export default Form;
