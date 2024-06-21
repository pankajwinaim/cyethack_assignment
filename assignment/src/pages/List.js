import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import { useSelector } from 'react-redux';

const List = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.data.items);

  const handleRowClick = (params) => {
    sessionStorage.setItem('item_id', params.row.id);
    navigate('/list/details');
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'details', headerName: 'Details', width: 350 },
  ];

  return (
    <Container>
      <Box mt={5}>
        <h1>List</h1>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={items} columns={columns} onRowClick={handleRowClick} />
        </div>
      </Box>
    </Container>
  );
};

export default List;
