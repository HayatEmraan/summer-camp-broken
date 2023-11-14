import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Instructor = () => {
  const { name } = useParams();
  const nameSplit = name.split("_");
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://summer-camp-sv.vercel.app/instuctor?name=" + nameSplit.join(" ")
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="container mx-auto my-6">
      <Helmet>
        <title>Instructor | E-Learning</title>
      </Helmet>
      <div className="lg:grid lg:grid-cols-7 mx-5">
        <div className="col-span-2 border p-4 rounded-md shadow-xl h-fit">
          {data &&
            data.cursor.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    className="rounded-md w-full"
                    src={item.image}
                    alt=""
                  />
                  <h1 className="text-xl">{item.name}</h1>
                  <h2 className="font-mono">{item.education}</h2>
                  <h2 className="font-semibold">IELTS: {item.ielts}</h2>
                  <h3>Phone - {item.phone}</h3>
                  <h2>Email - {item.email}</h2>
                </div>
              );
            })}
        </div>
        <div className="col-span-5 ms-12">
          <h2 className="font-semibold text-center font-cinzel text-3xl my-5 lg:my-0">
            Courses by {nameSplit.join(" ")}
          </h2>
          <div className="space-y-4">
            {data &&
              data.courses.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="card block md:flex card-side bg-base-100 shadow-xl p-2">
                      <img
                        style={{ height: "187px" }}
                        className="rounded-lg w-full md:w-[230px]"
                        src={item.thumbnailImage}
                        alt="Movie"
                      />
                      <div className="card-body">
                        <h2 className="card-title">{item.courseName}</h2>
                        <p>{item.teacherName}</p>
                        <div className="flex items-center justify-between">
                          <h2>Available Seats: {item.availableSits}</h2>
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
