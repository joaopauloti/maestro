<?php
/**
 * 
 *
 * @category   Maestro
 * @package    UFJF
 * @subpackage common
 * @copyright  Copyright (c) 2003-2012 UFJF (http://www.ufjf.br)
 * @license    http://siga.ufjf.br/license
 * @version    
 * @since      
 */

namespace common\models;

class Acesso extends map\AcessoMap {

    public static function config() {
        return array(
            'log' => array(  ),
            'validators' => array(
            ),
            'converters' => array()
        );
    }
    
    public function getDescription(){
        return $this->getIdAcesso();
    }

    public function listByFilter($filter){
        $criteria = $this->getCriteria()->select('*')->orderBy('idAcesso');
        if ($filter->idAcesso){
            $criteria->where("idAcesso LIKE '{$filter->idAcesso}%'");
        }
        return $criteria;
    }
}

?>