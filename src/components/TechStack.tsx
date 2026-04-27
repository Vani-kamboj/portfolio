import Marquee from "react-fast-marquee";

const techRow1 = [
  { 
    name: "Microsoft Fabric", 
    Icon: () => <img src="https://raw.githubusercontent.com/Vani-kamboj/Vani-Kamboj.portfolio.github.io/main/fabric.png" width="24" height="24" />, 
    color: "" 
  },
  { 
    name: "Microsoft Power BI", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=QMTbsd0FVhHS&format=png&color=F2C811" width="28" height="28" />, 
    color: "" 
  },
  { 
    name: "Power Query", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=QMTbsd0FVhHS&format=png&color=F2C811" width="28" height="28" />, 
    color: "" 
  },
  { 
    name: "Microsoft SQL Server", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000" width="28" height="28" />, 
    color: "" 
  },
  { 
    name: "Report Builder", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=cM5Dj9gp1RPC&format=png&color=000000" width="28" height="28" />, 
    color: "" 
  },
  { 
    name: "Excel", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=117561&format=png&color=000000" width="28" height="28" />, 
    color: "" 
  },
];

const techRow2 = [
  { 
    name: "Data Analysis", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=QDr5SymT6tib&format=png&color=000000" width="28" height="28" />, 
    color: "" 
  },
  { 
    name: "Data Automation", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=64br7u9FDpMC&format=png&color=000000" width="28" height="28" />, 
    color: "" 
  },
  { 
    name: "Data Modeling ", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=Hq7DApcF2d4C&format=png&color=FA5252" width="28" height="28" />, 
    color: "" 
  },
  { 
    name: "Data Pipeline", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=93OJxXeBY896&format=png&color=12B886" width="28" height="28" />, 
    color: "" 
  },
  { 
    name: "Data Integration", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=WEc3h8mgM1Kt&format=png&color=FFFFFF" width="30" height="30" />, 
    color: "" 
  },
  { 
    name: "Data Visualization", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=AfQG1GqyV06c&format=png&color=000000" width="28" height="28" />, 
    color: "" 
  },
];

const techRow3 = [
  { 
    name: "Data Management", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=6t7UNc03Q7lh&format=png&color=22C3E6" width="28" height="28" />, 
    color: "" 
  },
  { 
    name: "Data Manipulation", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=48391&format=png&color=EBEBEB" width="28" height="28" />, 
    color: "" 
  },
  { 
    name: "Data Ingestion", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=0Ni5Auk1wGUQ&format=png&color=FFFFFF" width="28" height="28" />, 
    color: "" 
  },
  { 
    name: "Requirements Gathering", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=8186&format=png&color=FAB005" width="28" height="28" />, 
    color: "" 
  },
  { 
    name: "Extract, Transform and Load (ETL)", 
    Icon: () => <img src="https://img.icons8.com/?size=100&id=X10esLaMcBb3&format=png&color=7950F2" width="28" height="28" />, 
    color: "" 
  },

];


function TechItem({
  name,
  Icon,
  color,
}: {
  name: string;
  Icon: any;
  color: string;
}) {
  return (
    <div className="techstack-item">
      <Icon className="techstack-item-icon" style={{ color }} aria-hidden />
      <span className="techstack-item-name">{name}</span>
    </div>
  );
}

const TechStack = () => {
  const rows = [techRow1, techRow2, techRow3];

  return (
    <section className="techstack" aria-labelledby="techstack-heading">
      <h2 id="techstack-heading">Tech Stack</h2>

      <div className="techstack-marquee-wrap">
        {rows.map((row, rowIndex) => (
          <Marquee
            key={rowIndex}
            speed={35 + rowIndex * 3}
            direction={rowIndex % 2 === 0 ? "left" : "right"}
            gradient={true}
            gradientColor="#0b080c"
            gradientWidth={80}
            className="techstack-marquee"
          >
            {row.map((tech, i) => (
              <TechItem
                key={`${tech.name}-${rowIndex}-${i}`}
                name={tech.name}
                Icon={tech.Icon}
                color={tech.color}
              />
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
