import React from "react";

const AuditLogs = ({ auditLogsData }: any) => {
  console.log("channelDetailData 007", auditLogsData);

  return (
    <React.Fragment>
      <div
        className=""
        style={{
          backgroundColor: "lavender",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <br />
        <h3>Audit Logs</h3>
        <br />

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">Modified On</label>

          <div className="col-lg-8 d-flex align-items-center">
            <span className="fw-bolder fs-6 me-2">
              {auditLogsData?.modifiedDateTime
                ? auditLogsData?.modifiedDateTime
                : "No Data to show."}
            </span>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">Modified By</label>

          <div className="col-lg-8 d-flex align-items-center">
            <span className="fw-bolder fs-6 me-2">
              {auditLogsData?.modifiedBy
                ? auditLogsData?.modifiedBy
                : "No Data to show."}
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuditLogs;
