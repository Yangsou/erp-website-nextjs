import Image from 'next/image'

export default function HomeTechStacks() {
  const dataItems = [
    [
      { src: `/home/tech-aws.png`, width: 105, height: 66 },
      { src: `/home/tech-powerBI.png`, width: 216, height: 56 },
      { src: `/home/tech-gg-cloude.png`, width: 272, height: 46 },
      { src: `/home/tech-mircrosoft-azure.png`, width: 170, height: 48 },
      { src: `/home/tech-databricks.png`, width: 119, height: 66 },
    ],
    [
      { src: `/home/erp-tech-cassandra.png`, width: 230, height: 47 },
      { src: `/home/tech-oracle.png`, width: 124, height: 40 },
      { src: `/home/tech-microsoft-sql.png`, width: 158, height: 40 },
      { src: `/home/tech-postgre.png`, width: 137, height: 46 },
      { src: `/home/tech-mysql.png`, width: 108, height: 47 },
      { src: `/home/tech-odoo.png`, width: 108, height: 35 },
    ],
    [
      { src: `/home/tech-redis.png`, width: 118, height: 40 },
      { src: `/home/tech-elasticsearch.png`, width: 223, height: 45 },
      { src: `/home/tech-hadoop.png`, width: 175, height: 45 },
      { src: `/home/tech-mongoDB.png`, width: 160, height: 46 },
      { src: `/home/tech-tableau.png`, width: 171, height: 46 },
    ],
  ]
  return (
    <div className="bg-white pb-32 pt-14">
      <div className="container max-w-[1126px]">
        <div className="text-center text-4xl text-[#202222]">Năng lực công nghệ</div>

        <div className="mt-[80px] space-y-28">
          {dataItems.map((g, index) => (
            <div
              key={index}
              className="items-center justify-between gap-2 space-y-4 md:flex md:space-y-0"
            >
              {g.map(({ height, src, width }) => (
                <Image
                  key={src}
                  src={src}
                  width={width}
                  height={height}
                  className="object-contain"
                  alt=""
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
