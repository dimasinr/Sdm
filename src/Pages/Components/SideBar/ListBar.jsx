import React from 'react'
import {FactCheck, AutoStories, Logout, DateRange, Analytics, Person, 
  Dashboard, Badge, Settings, Feed, Gavel, AccountBox} from '@mui/icons-material';
import {List, ListItem, ListItemButton, ListItemIcon, Container, ListItemText, Divider, Tooltip} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROLES } from '../../../Api/Api';

export default function ListBar() {

    const location = useLocation()
    const navigate = useNavigate()

    const side_name = location.pathname.split("/")[1]
    
    const logout = () => {
        localStorage.clear()
        navigate('/')
        window.location.reload()
      }

return (
    <React.Fragment>
      <Container maxWidth="sm">
        {ROLES === 'hrd' ? 
        <List>
        <Link to="/home" style={{ textDecoration:'none', color:'black' }}>
        <ListItem disablePadding className={side_name === 'home' ? "side_col" : "side_no_col" }>
            <ListItemButton>
              <ListItemIcon>
                <Dashboard sx={side_name === 'home' ? {color: '#ffffff'} : { color:'#0B305A' }} />
              </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/list-pengajuan" style={{ textDecoration:'none', color:'black' }}>
        <ListItem disablePadding className={side_name === 'list-pengajuan' ? "side_col" : "side_no_col" }>
            <ListItemButton>
              <ListItemIcon>
                <FactCheck sx={side_name === 'list-pengajuan' ? {color: '#ffffff'} : { color:'#0B305A' }} />
              </ListItemIcon>
              <ListItemText primary='List Pengajuan' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <small className='text-secondary container'>Pengajuan Saya</small>
        <Link to="/pengajuan" style={{ textDecoration:'none', color:'black' }}>
        <ListItem disablePadding className={side_name === 'pengajuan' ? "side_col" : "side_no_col" }>
            <ListItemButton>
              <ListItemIcon>
                <Feed sx={side_name === 'pengajuan' ? {color: '#ffffff'} : { color:'#0B305A' }} />
              </ListItemIcon>
              <ListItemText primary='Pengajuan' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <small className='text-secondary container'>Menu HRD</small>
        <Link to="/notes" style={{ textDecoration:'none', color:'black' }}>
          <ListItem disablePadding className={side_name === 'notes' ? "side_col" : "side_no_col" }>
            <ListItemButton>
              <ListItemIcon>
                <AutoStories sx={side_name === 'notes' ? {color: '#ffffff'} : { color:'#0B305A' }} />
              </ListItemIcon>
              <ListItemText primary='Catatan HRD' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/calendar-cuti" style={{ textDecoration:'none', color:'black' }}>
          <ListItem disablePadding className={side_name === 'calendar-cuti' ? "side_col" : "side_no_col" }>
            <ListItemButton>
              <ListItemIcon>
                <DateRange sx={side_name === 'calendar-cuti' ? {color: '#ffffff'} : { color:'#0B305A' }} />
              </ListItemIcon>
              <ListItemText primary='Kalender Cuti' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <small className='text-secondary container'>Manajemen Absensi</small>
        <Link to='/employee/absensi' style={{ textDecoration:'none', color:'black' }}>
          <ListItem disablePadding className={side_name === 'employee' ? "side_col" : "side_no_col" }>
            <ListItemButton>
              <ListItemIcon>
                <Badge sx={side_name === 'employee' ? {color: '#ffffff'} : { color:'#0B305A' }} />
              </ListItemIcon>
              <ListItemText primary='Absensi Karyawan' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to='/absensi' style={{ textDecoration:'none', color:'black' }}>
          <ListItem disablePadding className={side_name === 'absensi' ? "side_col" : "side_no_col" }>
            <ListItemButton>
              <ListItemIcon>
                <Analytics sx={side_name === 'absensi' ? {color: '#ffffff'} : { color:'#0B305A' }} />
              </ListItemIcon>
              <ListItemText primary='Analisa Absensi' />
            </ListItemButton>
          </ListItem>
        </Link>
        <small className='text-secondary container'>Manajemen Karyawan</small>
        <Link to="/list-karyawan" style={{ textDecoration:'none', color:'black' }}>
          <ListItem disablePadding className={side_name === 'list-karyawan' ? "side_col" : "side_no_col" }>
            <ListItemButton>
              <ListItemIcon>
                <Person sx={side_name === 'list-karyawan' ? {color: '#ffffff'} : { color:'#0B305A' }} />
              </ListItemIcon>
              <ListItemText primary='List Karyawan' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/contract/employee" style={{ textDecoration:'none', color:'black' }}>
          <ListItem disablePadding className={side_name === 'contract' ? "side_col" : "side_no_col" }>
            <ListItemButton>
              <ListItemIcon>
                <Gavel sx={side_name === 'contract' ? {color: '#ffffff'} : { color:'#0B305A' }} />
              </ListItemIcon>
              <ListItemText primary='Kontrak Karyawan' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <small className='text-secondary container'>Pengaturan</small>
        <ListItem disablePadding>
            <Tooltip title='Belum tersedia'>
              <ListItemButton>
                <ListItemIcon>
                  <Settings sx={{ color:'#A8A8A8' }} />
                </ListItemIcon>
                <ListItemText primary='Pengaturan Akun' />
              </ListItemButton>
            </Tooltip>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={logout}>
              <ListItemIcon>
                <Logout sx={{ color:'red' }} />
              </ListItemIcon>
              <ListItemText primary='Keluar' />
            </ListItemButton>
          </ListItem>
      </List>
        : null
        }
        {ROLES === 'karyawan' ? 
        <List>
          <Link to='/home' style={{ textDecoration:'none', color:'black' }}>
            <ListItem disablePadding className={side_name === 'home' ? "side_col" : "side_no_col" }>
              <ListItemButton>
                <ListItemIcon>
                  <Dashboard className={side_name === 'home' ? 'ic_col' : 'ic_no_col'} />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/pengajuan' style={{ textDecoration:'none', color:'black' }}>
          <ListItem disablePadding className={side_name === 'pengajuan' ? "side_col" : "side_no_col" }>
            <ListItemButton>
              <ListItemIcon>
                <FactCheck className={side_name === 'pengajuan' ? 'ic_col' : 'ic_no_col'} />
              </ListItemIcon>
              <ListItemText primary='Pengajuan' />
            </ListItemButton>
          </ListItem>
        </Link>
          <Link to='/list-pengajuan' style={{ textDecoration:'none', color:'black' }}>
          <ListItem disablePadding className={side_name === 'list-pengajuan' ? "side_col" : "side_no_col" }>
            <ListItemButton>
              <ListItemIcon>
                <Feed className={side_name === 'list-pengajuan' ? 'ic_col' : 'ic_no_col'} />
              </ListItemIcon>
              <ListItemText primary='List Pengajuan' />
            </ListItemButton>
          </ListItem>
        </Link>
          <small className='text-secondary container'>ABSENSI</small>
          {/* <Link to='/presence/list' style={{ textDecoration:'none', color:'black' }}>
          <ListItem disablePadding className={side_name === 'presence' ? "side_col" : "side_no_col" }>
            <ListItemButton>
              <ListItemIcon>
                <Badge className={side_name === 'presence' ? 'ic_col' : 'ic_no_col'} />
              </ListItemIcon>
              <ListItemText primary='Absensi Karyawan' />
            </ListItemButton>
          </ListItem>
        </Link> */}
        <Link to='/employee/presence' style={{ textDecoration:'none', color:'black' }}>
          <ListItem disablePadding className={side_name === 'employee' ? "side_col" : "side_no_col" }>
            <ListItemButton>
              <ListItemIcon>
                <Analytics className={side_name === 'employee' ? 'ic_col' : 'ic_no_col'} />
              </ListItemIcon>
              <ListItemText primary='Analisa Absensi' />
            </ListItemButton>
          </ListItem>
        </Link>
          <small className='text-secondary container'>NOTES</small>
          <Link to="/notes/employee/" style={{ textDecoration:'none', color:'black' }}>
          <ListItem disablePadding className={side_name === 'notes' ? "side_col" : "side_no_col" }>
            <ListItemButton>
              <ListItemIcon>
                <AutoStories className={side_name === 'notes' ? 'ic_col' : 'ic_no_col'} />
              </ListItemIcon>
              <ListItemText primary='Catatan Admin HRD' />
            </ListItemButton>
          </ListItem>
        </Link>
          <small className='text-secondary container'>DATA</small>
          <Link to="/profile/employee/" style={{ textDecoration:'none', color:'black' }}>
          <ListItem disablePadding className={side_name === 'profile' ? "side_col" : "side_no_col" }>
            <Tooltip title='Data Diri'>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBox className={side_name === 'profile' ? 'ic_col' : 'ic_no_col'} />
                </ListItemIcon>
                <ListItemText primary='Data Diri' />
              </ListItemButton>
            </Tooltip>
            </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton onClick={logout}>
              <ListItemIcon>
                <Logout sx={{ color:'red' }} />
              </ListItemIcon>
              <ListItemText primary='Keluar' />
            </ListItemButton>
          </ListItem>
        </List>
        : null}
        {ROLES === 'atasan' ? 
        <List>
          <Link to="/home" style={{ textDecoration:'none', color:'black' }}>
          <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Dashboard sx={{ color:'#0B305A' }} />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/list-pengajuan/karyawan/" style={{ textDecoration:'none', color:'black' }}>
          <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FactCheck sx={{ color:'#0B305A' }} />
                </ListItemIcon>
                <ListItemText primary='List Pengajuan' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider />
          <small className='text-secondary container'>Absensi</small>
          <Link to='/presence/list' style={{ textDecoration:'none', color:'black' }}>
            <ListItem disablePadding className={side_name === 'presence' ? "side_col" : "side_no_col" }>
              <ListItemButton>
                <ListItemIcon>
                  <Badge sx={side_name === 'presence' ? 'ic_col' : 'ic_no_col'} />
                </ListItemIcon>
                <ListItemText primary='Absensi Karyawan' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/employee/presence' style={{ textDecoration:'none', color:'black' }}>
            <ListItem disablePadding className={side_name === 'employee' ? "side_col" : "side_no_col" }>
              <ListItemButton>
                <ListItemIcon>
                  <Analytics sx={side_name === 'employee' ? {color: '#ffffff'} : { color:'#0B305A' }} />
                </ListItemIcon>
                <ListItemText primary='Analisa Absensi' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider />
          <small className='text-secondary container'>Pengaturan</small>
          {/* <Link to="/settings/" style={{ textDecoration:'none', color:'black' }}> */}
          <ListItem disablePadding>
            <Tooltip title='Belum tersedia'>
              <ListItemButton>
                <ListItemIcon>
                  <Settings sx={{ color:'#A8A8A8' }} />
                </ListItemIcon>
                <ListItemText primary='Pengaturan Akun' />
              </ListItemButton>
            </Tooltip>
            </ListItem>
          {/* </Link> */}
            <ListItem disablePadding>
              <ListItemButton onClick={logout}>
                <ListItemIcon>
                  <Logout sx={{ color:'red' }} />
                </ListItemIcon>
                <ListItemText primary='Keluar' />
              </ListItemButton>
            </ListItem>
        </List>
        : null}
      </Container>
    </React.Fragment>
  )
}
