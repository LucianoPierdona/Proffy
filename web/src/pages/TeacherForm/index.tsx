import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import './styles.css';
import api from '../../services/api';

function TeacherForm() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const [scheduleItems, setScheduleItems ] = useState([
        { week_day: 0, from: '', to: ''}
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems, //copia a array
            { week_day: 0, from: '', to: ''}
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;

        });
        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('cadastro realizado com sucesso');
            history.push("/");
        }).catch(() => {
            alert('erro no cadastro');
        })

        e.preventDefault();
        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems,
        });
    }
    
    return (
    <div id="page-teacher-form" className="container">
        <PageHeader 
            title="Que incrivel que você quer dar aulas."
            description="O primeiro passo é preencher esse formulário de inscrição" 
        />

        <main>
            <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus Dados</legend>
                        <Input 
                            name="name" 
                            label="Nome Completo" 
                            value={name} 
                            onChange={(e) => { setName(e.target.value)}}     
                        />
                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={avatar} 
                            onChange={(e) => { setAvatar(e.target.value)}}
                        />
                        <Input 
                            name="whatsapp" 
                            label="WhatsApp" 
                            value={whatsapp} 
                            onChange={(e) => { setWhatsApp(e.target.value)}}
                        />
                        <Textarea 
                            name="bio" 
                            label="Biografia"
                            value={bio} 
                            onChange={(e) => { setBio(e.target.value)}}
                        />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                        <Select 
                            name="subject" 
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value)}}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Educação Fisica', label: 'Educação Fisica' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Fisica', label: 'Fisica' },
                                { value: 'História', label: 'História' },
                                { value: 'Inglês', label: 'Inglês' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'Filosofia', label: 'Filosofia' },
                                { value: 'Sociologia', label: 'Sociologia' },
                                { value: 'Literatura', label: 'Literatura' },
                            ]} 
                            />
                        <Input 
                            name="cost" 
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value)}} 
                        />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários Disponiveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo Horário
                        </button>
                    </legend>

                    {scheduleItems.map((scheduleItem, index) => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Dia da Semana"
                                    value={scheduleItem.week_day}
                                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda-feira' },
                                        { value: '2', label: 'Terça-feira' },
                                        { value: '3', label: 'Quarta-feira' },
                                        { value: '4', label: 'Quinta-feira' },
                                        { value: '5', label: 'Sexta-feira' },
                                        { value: '6', label: 'Sabado' },
                                    ]}
                                />
                                <Input 
                                    name="from" 
                                    label="Das" 
                                    type="time"
                                    value={scheduleItem.from}
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)} 
                                />
                                <Input 
                                    name="to"
                                    label="Até" 
                                    type="time"
                                    value={scheduleItem.to}
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)} 
                                />
                            </div>
                        )
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="submit">
                        Salvar cadastro
                    </button>
                </footer>
            </form>
        </main>
    </div>
    );
}

export default TeacherForm;