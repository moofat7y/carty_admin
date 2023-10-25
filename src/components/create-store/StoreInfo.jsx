import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import errHandler from "../../utils/errHandler";
import RegulerInput from "../ui/inputs/RegulerInput";
import SelectInput from "../ui/inputs/SelectInput";

export default function StoreInfo({ register, watch, errors }) {
  const [city, setCity] = useState({ status: "idle", cities: [] });

  useEffect(() => {
    const getCities = async () => {
      try {
        setCity((prev) => ({ ...prev, status: "loading" }));
        const res = await api.get("/seller/cities");
        setCity((prev) => ({
          ...prev,
          cities: res.data.data,
          status: "success",
        }));
      } catch (error) {
        error = errHandler(error);
        setCity((prev) => ({ ...prev, status: "error" }));
      }
    };

    getCities();
  }, []);

  return (
    <>
      <h3 className="text-center text-2xl font-semibold mb-8">
        معلومات المتجر
      </h3>
      <div className="space-y-3">
        <div className="">
          <RegulerInput
            label={"اسم المتجر"}
            inputName={"name"}
            type={"text"}
            errors={errors}
            register={register("name", {
              required: "يجب عليك ادخال اسم المتجر",
            })}
          />
          <p>
            www.cartyi.com/
            <span className="text-primary-500 font-semibold">
              {watch("name")}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1">
            <SelectInput
              label={"عنوان المتجر"}
              inputName={"city_id"}
              type={""}
              errors={errors}
              register={register("city_id", {
                required: "يجب عليك ادخال اسم المدينه",
              })}
              options={city.cities}
              defaultOption={{ value: "", label: "اختر مدينه" }}
            />
          </div>

          <div className="flex-1">
            <RegulerInput
              label={"العنوان التفصيلي"}
              inputName={"location"}
              type={"text"}
              errors={errors}
              register={register("location", {
                required: "يجب عليك ادخال العنوان",
              })}
            />
          </div>
        </div>
      </div>
    </>
  );
}
