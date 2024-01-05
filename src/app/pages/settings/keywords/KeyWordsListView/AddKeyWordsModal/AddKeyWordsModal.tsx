import React from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
// import { defaultCreateAppData, ICreateAppData } from "./IAppModels";
import { KTIcon } from "../../../../../../_metronic/helpers";
// import { url } from "inspector";
import { toAbsoluteUrl } from "../../../../../../_metronic/helpers";

// import { StepperComponent } from "../../../../../_metronic/assets/ts/components";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const modalsRoot = document.getElementById("root-modals") || document.body;

const blankImg = toAbsoluteUrl("media/svg/avatars/blank.svg");

const AddKeyWordsModal = ({ show, handleClose, setData }: any) => {
  const [mediaTitle, setMediaTitle] = React.useState<string>("");
  const [mediaDescription, setMediaDescription] = React.useState<string>("");
  const [mediaFile, setMediaFile] = React.useState<string>(blankImg);
  const [formError, setFormError] = React.useState<boolean>(false);

  const handleSubmitForm = () => {
    if (mediaTitle.length < 2 || mediaDescription.length < 2) {
      setFormError(true);
    } else {
      setData({
        ["mediaFile"]: mediaFile,
        ["mediaTitle"]: mediaTitle,
        ["mediaDescription"]: mediaDescription,
      });
      setFormError(false);
      handleClose();
    }
  };
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
        <h2>Add KeyWords</h2>
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
              value={mediaTitle}
              onChange={(event) => {
                setMediaTitle(event.target.value);
              }}
            />
            {mediaTitle.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">KeyWords is Required.</div>
              </div>
            )}
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
              value={mediaDescription}
              onChange={(event) => {
                setMediaDescription(event.target.value);
              }}
            />
            {mediaDescription.length < 2 && formError && (
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

      <div className="d-flex flex-end py-3 px-8">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={handleSubmitForm}
        >
          Submit
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
      </div>
    </Modal>,
    modalsRoot
  );
};

export default AddKeyWordsModal;
