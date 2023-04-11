import React, { useState } from "react";

const fees = {
  "Exam Fee": {
    INDIAN: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 400,
        },
      },
    },
    FOREIGN: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 100,
        },
      },
    },
    NRI: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 600,
        },
      },
    },
    SAARC: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 600,
        },
      },
    },
  },
  "Application Fee": {
    INDIAN: {
      ALL_COURSES: {
        UG: {
          amount: 200,
        },
      },
    },
    "UG-DIPLOMA": {
      amount: 300,
    },
    PG: {
      amount: 500,
    },
  },
  FOREIGN: {
    ALL_COURSES: {
      UG: {
        amount: 400,
      },
      "UG-DIPLOMA": {
        amount: 400,
      },
      PG: {
        amount: 700,
      },
    },
  },
};

function FeeCal() {
  const [selectedFee, setSelectedFee] = useState(null);
  const [selectedNationality, setSelectedNationality] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [feeAmount, setFeeAmount] = useState(null);

  const handleFeeChange = (e) => {
    setSelectedFee(e.target.value);
    setSelectedNationality(null);
    setSelectedCourse(null);
    setFeeAmount(null);
  };

  const handleNationalityChange = (e) => {
    setSelectedNationality(e.target.value);
    setSelectedCourse(null);
    setFeeAmount(null);
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    const amount =
      fees[selectedFee][selectedNationality][selectedCourse]?.amount;
    setFeeAmount(amount);
  };

  return (
    <div>
      <h2>Fee Calculator</h2>
      <div>
        <label>Select Fee Type:</label>
        <select value={selectedFee} onChange={handleFeeChange}>
          <option value={null}>--Select Fee--</option>
          {Object.keys(fees).map((fee) => (
            <option key={fee} value={fee}>
              {fee}
            </option>
          ))}
        </select>
      </div>
      {selectedFee && (
        <div>
          <label>Select Nationality:</label>
          <select
            value={selectedNationality}
            onChange={handleNationalityChange}
          >
            <option value={null}>--Select Nationality--</option>
            {Object.keys(fees[selectedFee]).map((nationality) => (
              <option key={nationality} value={nationality}>
                {nationality}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedNationality && (
        <div>
          <label>Select Course:</label>
          <select value={selectedCourse} onChange={handleCourseChange}>
            <option value={null}>--Select Course--</option>
            {Object.keys(fees[selectedFee][selectedNationality]).map(
              (course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              )
            )}
          </select>
        </div>
      )}
      {selectedCourse && (
        <div>
          <p>Fee to be paid: {feeAmount}</p>
        </div>
      )}
    </div>
  );
}
export default FeeCal;


