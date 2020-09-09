import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader/index';
import TeacherItem from '../../components/TeacherItem/index'
import Input from '../../components/input';
import Select from '../../components/select';
import './styles.css'

function searchTearchers(e:FormEvent) {
    e.preventDefault();
}

function TeacherList() {
    //const  [subject, setSubject] = useState;
    //const  [week_day, setWeekday] = useState;
    //const  [time, setTime] = useState;
    
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title='Estes são os proffys disponíveis'>
                
                <form id="search-teachers" onSubmit={searchTearchers}>
                    
                <Select 
                    name='subject'
                    label='Matéria' 
                    //value={subject}
                    //onChange={(e) => { setSubject(e.target.value)}}
                    options={[
                        {value:'Artes', label:'Artes'},
                        {value:'Biologia', label:'Biologia'},
                        {value:'Ciências', label:'Ciências'},
                        {value:'Educação Física', label:'Educação Física'},
                        {value:'Física', label:'Física'},
                        {value:'Geografia', label:'Geografia'},
                        {value:'História', label:'História'},
                        {value:'Matemática', label:'Matemática'},
                        {value:'Portugês', label:'Portugês'},
                        {value:'Química', label:'Química'}
                        ]} />
                    
                        <Select 
                    name='week_day'
                    label='Dia da semana' 
                    //value={week_day}
                    //onChange={(e) => { setWeekday(e.target.value)}}
                    options={[
                        {value:'0', label:'Domingo'},
                        {value:'1', label:'Segunda-feira'},
                        {value:'2', label:'Terça-feira'},
                        {value:'3', label:'Quarta-feira'},
                        {value:'4', label:'Quinta-feira'},
                        {value:'5', label:'Sexta-feira'},
                        {value:'6', label:'Sábado'},
                        ]} />
                        
                    <Input type='time' name='time' label='hora'
                    //value={time}
                    //onChange={(e) => { setTime(e.target.value)}}
                    />
                    <button type='submit'>Buscar</button>

                </form>
            </PageHeader>
    
            <main>
              
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />

            </main>
        </div>
    )
}

export default TeacherList;