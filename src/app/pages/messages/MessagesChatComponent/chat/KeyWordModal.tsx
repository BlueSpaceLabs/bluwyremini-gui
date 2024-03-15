import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { KTIcon } from "../../../../../_metronic/helpers";
import useStaticData from "../../../../StaticData";
import axios from "axios";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const KeyWordDetailCard = ({
  title,
  description,
  selectedKeyWord,
  setSelectedKeyWord,
}: any) => {
  const handleKeyWordClick = () => {
    setSelectedKeyWord(description);
  };

  return (
    <div
      className={selectedKeyWord === description ? "bg-light" : ""}
      style={{ cursor: "pointer" }}
      onClick={handleKeyWordClick}
    >
      <div className="fw-bolder fs-6 text-gray-900">{title}</div>
      <div className=" fw-bold text-muted">{description}</div>
    </div>
  );
};

const modalsRoot = document.getElementById("root-modals") || document.body;

const KeyWordModal = ({
  show,
  handleClose,
  selectedKeyWord,
  setSelectedKeyWord,
}: any) => {
  const { baseUrl } = useStaticData();

  const [keywordListData, setKeywordListData] = useState([]);

  useEffect(() => {
    const url = `${baseUrl}/getKeywordDetails.php`;
    const accessKey = sessionStorage.getItem("accessKey");

    const params = {
      accessKey: accessKey,
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });

        // console.log("response getKeywordDetails:", response.data);
        setKeywordListData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return createPortal(
    <Modal
      tabIndex={-1}
      aria-hidden="true"
      dialogClassName="modal-dialog modal-dialog-centered mw-900px"
      show={show}
      onHide={handleClose}
      backdrop={true}
    >
      <div className="modal-header">
        <h2>Keyword Details</h2>

        <div className="d-flex">
          <button
            type="button"
            className="btn btn-lg btn-secondary"
            data-kt-stepper-action="submit"
            onClick={() => setSelectedKeyWord("")}
          >
            Reset
          </button>

          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            onClick={handleClose}
          >
            <KTIcon className="fs-1" iconName="cross" />
          </div>
        </div>
      </div>

      <div
        className="modal-body d-flex flex-column gap-3 h-300px"
        style={{ overflowY: "auto" }}
      >
        {keywordListData?.length > 0 &&
          keywordListData.map((item: any) => {
            return (
              <KeyWordDetailCard
                key={item.id}
                title={item.keyword}
                description={item.description}
                selectedKeyWord={selectedKeyWord}
                setSelectedKeyWord={setSelectedKeyWord}
              />
            );
          })}
      </div>

      <div className="d-flex flex-end py-3 px-8 gap-3">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={handleClose}
        >
          Close
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
      </div>
    </Modal>,
    modalsRoot
  );
};

export default KeyWordModal;
