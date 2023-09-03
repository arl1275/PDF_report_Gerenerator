import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

//process
import { get_name } from './Format';
import { Cuadro } from './Table';

const doc = new jsPDF();
autoTable(doc, Cuadro);

doc.save(get_name()+".pdf");