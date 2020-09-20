import { Box, Text, DataTable, CheckBox, ColumnConfig } from "grommet"
import React, { useState } from "react"
import Util from "../../general/Util"

export interface IInterviewInfo {
  id: string
  name?: string
  timestamp: Date
  document: string
  place: string
  confirmed: boolean
}

let compareChecked = (data1: IInterviewInfo, data2: IInterviewInfo) => {
  if (data1.confirmed === data2.confirmed) {
    return Util.datesComparator(data1, data2)
  } else if (data1.confirmed < data2.confirmed) {
    return -1
  } else {
    return 1
  }
}

interface IInterviewInfoListProps {
  info: IInterviewInfo[]
  showName: boolean
  onRowClick: (info: IInterviewInfo) => void
}

const InterviewInfoList = (props: IInterviewInfoListProps) => {
  let [info, setInfo] = useState(props.info)
  const nameColumn: ColumnConfig<IInterviewInfo>[] = props.showName
    ? [
        {
          align: "center",
          property: "name",
          header: <Text>Name</Text>,
          sortable: false,
          search: true,
        },
      ]
    : []

  return (
    <Box
      align="center"
      pad="small"
      background="background-contrast"
      alignSelf="center"
      round={true}
      flex={{ shrink: 0 }}
      overflow={{ vertical: "auto" }}
    >
      <DataTable
        sort={{ direction: "desc", property: "date" }}
        primaryKey={false}
        sortable={true}
        onSort={({ property, direction }) => {
          let isDesc = direction === "desc"
          if (property === "date" || property === "time") {
            if (isDesc) {
              setInfo(info.sort(Util.datesComparator).reverse())
            } else {
              setInfo(info.sort(Util.datesComparator))
            }
          } else if (property === "confirmed") {
            if (isDesc) {
              setInfo(info.sort(compareChecked).reverse())
            } else {
              setInfo(info.sort(compareChecked))
            }
          }
        }}
        size="medium"
        alignSelf="center"
        onClickRow={event => props.onRowClick(event.datum)}
        columns={[
          ...nameColumn,
          {
            align: "center",
            property: "date",
            header: <Text>Date</Text>,
            sortable: true,
            render: ({ timestamp }) => {
              return (
                <Box alignSelf="center" align="center">
                  {timestamp.getMonth()}/{timestamp.getDate()}/{timestamp.getFullYear()}
                </Box>
              )
            },
          },
          {
            align: "center",
            property: "time",
            header: <Text>Time (24 hrs)</Text>,
            sortable: true,
            render: ({ timestamp }) => {
              return (
                <Box alignSelf="center" align="center">
                  {timestamp.getHours()}:{timestamp.getMinutes()}
                </Box>
              )
            },
          },
          {
            align: "center",
            property: "document",
            header: <Text>Document</Text>,
            sortable: true,
            render: ({ document }) => {
              return <a href={document}>Link</a>
            },
          },
          {
            align: "center",
            property: "place",
            header: <Text>Place</Text>,
            sortable: true,
          },
          {
            align: "center",
            property: "confirmed",
            header: <Text>Confirmed</Text>,
            sortable: true,
            render: ({ confirmed }) => {
              return (
                <Box alignSelf="center" align="center">
                  <CheckBox checked={confirmed} />
                </Box>
              )
            },
          },
        ]}
        data={info}
      />
    </Box>
  )
}

export default InterviewInfoList