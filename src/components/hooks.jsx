import { queryOptions } from "../mock/mock.js";
export const bodyCell = ({ text, record, index, column }) => {
  if ("query" === column.dataIndex) {
    return (
      <>
        <el-tooltip
          class="box-item"
          effect="dark"
          content={text}
          placement="top"
        >
          <a href="#">{text}</a>
        </el-tooltip>
        {
          {
            /* <el-tooltip
            class="box-item"
            effect="dark"
            content="Right Center prompts info"
            placement="right"
          >
            <el-select
              vModel={record.status}
              class="m-2"
              placeholder="Select"
              size="small"
            >
              {queryOptions.map((item) => (
                <el-option
                  key={item.value}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </el-select>
          </el-tooltip> */
          }
        }
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Top Center prompts info"
          placement="top"
        >
          <svg-icon
            iconClass="preview"
            className="action-icon row-hover-show"
          />
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Top Center prompts info"
          placement="top"
        >
          <svg-icon
            iconClass="preview"
            className="action-icon row-hover-show"
          />
        </el-tooltip>
      </>
    );
  } else if ("operation" === column.dataIndex) {
    return (
      <>
        <svg-icon iconClass="preview" className="action-icon" />
        <svg-icon iconClass="preview" className="action-icon" />
        <svg-icon iconClass="preview" className="action-icon" />
      </>
    );
  } else if ("bid" === column.dataIndex) {
    return <a href="#">{text}</a>;
  } else if (["CampaignName", "AdgroupName"].includes(column.dataIndex)) {
    return <p class="text-over">{text}</p>;
  } else {
    return column.render
      ? column.render({ text, record, index, column })
      : text;
  }
};
