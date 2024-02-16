import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { KTIcon } from "../../../../../_metronic/helpers";
import axios from "axios";
import DeleteKeyWordModal from "./Delete";
// import { KTIcon } from "../../../../../../_metronic/helpers";
// import { url } from "inspector";

// import { StepperComponent } from "../../../../../_metronic/assets/ts/components";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const modalsRoot = document.getElementById("root-modals") || document.body;

const EditKeyWordModal = ({
  show,
  handleClose,
  initialData,
  setRefetchList,
  closeDetailModal,
  setSnackbar,
}: any) => {
  const [keyWordTitle, setKeyWordTitle] = React.useState<string>("");
  const [keyWordDescription, setKeyWordDescription] =
    React.useState<string>("");
  const [formError, setFormError] = React.useState<boolean>(false);
  const [showDeleteKeyWordModal, setShowDeleteKeyWordModal] =
    React.useState<boolean>(false);

  const handleAddKeyWordSubmit = async () => {
    if (keyWordDescription.length < 2) {
      setFormError(true);
    } else {
      setFormError(false);

      try {
        const data = {
          tenant: "bsl",
          accessKey:
            "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
          keyword_data: {
            description: keyWordDescription,
          },
        };

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const selectedId = initialData.id;

        const response = await axios.put(
          `http://3.108.229.60:8082/bluwyremini-backend/info/updateKeywordDetails.php?id=${selectedId}`,
          data,
          config
        );

        setRefetchList((preV: boolean) => !preV);
        console.log("response", response);

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "success",
          messageSnackBar: response?.data?.message
            ? response?.data?.message
            : "Successfully Updated KeyWord !",
        });
      } catch (error) {
        console.error("Error:", error);

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "error",
          messageSnackBar: error?.response?.data?.message
            ? error?.response?.data?.message
            : "Failed to Update KeyWord !",
        });
      } finally {
        handleClose();
        closeDetailModal();
      }
    }
  };

  useEffect(() => {
    setKeyWordTitle(initialData.keyword);
    setKeyWordDescription(initialData.description);
  }, [initialData]);

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
        <h2>Edit KeyWords</h2>
        {/* begin::Close */}
        <div
          className="btn btn-sm btn-icon btn-active-color-primary"
          onClick={handleClose}
        >
          <KTIcon className="fs-1" iconName="cross" />
        </div>
        {/* end::Close */}
      </div>

      <div className="modal-body py-lg-10 px-lg-10">
        {/*begin::Form Group */}
        <div className="d-flex  flex-wrap flex-row justify-content-between align-items-start">
          {/* begin::Input group */}
          {/* <div className="fv-row mb-7"> */}
          {/* begin::Label */}
          {/* end::Label */}

          {/* begin::Image input */}
          {/* <div className="image-input image-input-outline"> */}
          {/* begin::Preview existing avatar */}
          {/* <div
                className="image-input-wrapper w-125px h-125px"
                style={{
                  backgroundImage: `url('${mediaFile}')`,
                }}
              ></div> */}
          {/* end::Preview existing avatar */}

          {/* <div className="d-flex flex-end pt-5">
                <input
                  type="file"
                  onChange={(e: any) =>
                    setMediaFile(URL.createObjectURL(e?.target?.files[0]))
                  }
                />

                <button
                  type="button"
                  className="btn btn-secondary"
                  // onClick={submit}
                  //   onClick={handleSubmitForm}
                >
                  Upload Media
                  <KTIcon iconName="add-files" className="fs-3 ms-2 me-0" />
                </button>
              </div> */}
          {/* </div> */}
          {/* end::Image input */}
          {/* </div> */}
          {/* end::Input group */}

          <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">KeyWords</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify KeyWords."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="config1"
              placeholder=""
              value={keyWordTitle}
              // onChange={(event) => {
              //   setKeyWordTitle(event.target.value);
              // }}
              readOnly
            />
            {/* {keyWordTitle.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">KeyWords Title is Required.</div>
              </div>
            )} */}
          </div>

          <div className=" fv-row mb-2 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">KeyWords Description</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify KeyWords Description."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="config1"
              placeholder=""
              value={keyWordDescription}
              onChange={(event) => {
                setKeyWordDescription(event.target.value);
              }}
            />
            {keyWordDescription.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  KeyWords Description is Required.
                </div>
              </div>
            )}
          </div>
        </div>

        {/*end::Form Group */}
      </div>

      <div className="d-flex flex-end py-3 px-8 gap-3">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={handleAddKeyWordSubmit}
        >
          Submit
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          // onClick={handleAddKeyWordSubmit}
          onClick={() => setShowDeleteKeyWordModal(true)}
        >
          Delete
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={handleClose}
        >
          Cancel
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
      </div>

      <DeleteKeyWordModal
        show={showDeleteKeyWordModal}
        handleClose={() => setShowDeleteKeyWordModal(false)}
        closeEditModal={handleClose}
        closeDetailModal={closeDetailModal}
        detailData={initialData}
        setRefetchList={setRefetchList}
        setSnackbar={setSnackbar}
      />
    </Modal>,
    modalsRoot
  );
};

export default EditKeyWordModal;
