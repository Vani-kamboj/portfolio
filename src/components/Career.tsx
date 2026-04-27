import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Data Analyst</h4>
                <h5>Privue.AI</h5>
              </div>
              <h3>Feb 2024 - Present</h3>
            </div>
            <p>
            Owned the full data lifecycle — from building automated ETL pipelines in Microsoft Fabric to delivering enterprise Power BI dashboards that drove real-time decisions.
            Architected Lakehouse and Warehouse solutions using Dataflows, Pipelines, and SQL, while maintaining 99%+ accuracy across every stage of ingestion, transformation,
             and reporting. Enforced data governance through Row-Level Security, worked directly with clients to turn business requirements into scalable analytical solutions, 
             and kept documentation tight enough that nothing got lost in handoffs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Data Analyst</h4>
                <h5>Dream IT CS Pvt. Ltd</h5>
              </div>
              <h3>Jul 2022 - Feb 2024</h3>
            </div>
            <p>
            Designed interactive Power BI dashboards powered by advanced DAX, building complex measures, 
            calculated columns, and KPI logic that enabled approximately 30% faster decision-making. 
            Leveraged SQL to query, validate, and ensure accuracy across every report,
             while transforming raw datasets into structured, analysis-ready tables. 
             Introduced Microsoft Fabric to streamline data pipelines and lay the groundwork for scalable, automated analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
