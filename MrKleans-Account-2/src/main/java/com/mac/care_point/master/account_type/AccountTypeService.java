/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.care_point.master.account_type;

import com.mac.care_point.master.account_type.model.MAccAccountType;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author kasun
 */
@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class AccountTypeService {

    @Autowired
    private AccountTypeRepository accountTypeRepository;

    public List<MAccAccountType> findAllAccType() {
        return accountTypeRepository.findAll();
    }

}
